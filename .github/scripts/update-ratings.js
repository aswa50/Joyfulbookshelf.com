const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

async function getAmazonRating(url) {
  const browser = await puppeteer.launch({ headless: 'new' });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Wait for the rating element
    await page.waitForSelector('span[data-hook="rating-out-of-text"]', { timeout: 5000 });

    const rating = await page.evaluate(() => {
      const ratingText = document.querySelector('span[data-hook="rating-out-of-text"]')?.textContent;
      return ratingText ? parseFloat(ratingText.split(' ')[0]) : null;
    });

    return rating;
  } catch (error) {
    console.error(`Error fetching rating for ${url}:`, error.message);
    return null;
  } finally {
    await browser.close();
  }
}

async function updateBookRatings() {
  const booksPath = path.join(process.cwd(), 'src', 'data', 'books.ts');
  const booksContent = await fs.readFile(booksPath, 'utf-8');
  
  // Parse the books array from the file
  const booksMatch = booksContent.match(/export const books: Book\[\] = \[([\s\S]*?)\];/);
  if (!booksMatch) {
    throw new Error('Could not find books array in file');
  }

  const booksArray = eval(`[${booksMatch[1]}]`);
  
  // Update ratings for each book
  for (const book of booksArray) {
    if (book.amazonLink) {
      console.log(`Fetching rating for ${book.title}...`);
      const rating = await getAmazonRating(book.amazonLink);
      if (rating) {
        book.averageRating = rating;
        console.log(`Updated rating for ${book.title}: ${rating}`);
      }
    }
  }

  // Format the updated books array
  const updatedContent = booksContent.replace(
    /export const books: Book\[\] = \[([\s\S]*?)\];/,
    `export const books: Book[] = ${JSON.stringify(booksArray, null, 2)};`
  );

  await fs.writeFile(booksPath, updatedContent, 'utf-8');
  console.log('Book ratings updated successfully');
}

updateBookRatings().catch(console.error); 