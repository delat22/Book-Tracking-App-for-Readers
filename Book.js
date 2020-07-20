export class Book {
        constructor(title, author, description, pages, read, currentPage){
            this.title = title;
            this.author = author;
            this.description = description;
            this.pages = pages;
            this.currentPage = currentPage;
            this.read = read;
        }
        readBook(page){
            if (page < 1 || page > this.pages){
                return 0;
            } 
            else if (page >= 1 && page < this.pages){
                this.currentPage = page;
                return 1;
                }
            else  {
                this.currentPage = page;
                this.read = true;
                return 1;
            }
                
        }
    }

let firstBook = new Book('Emotional Intelligence', 
                         'Daniel Goleman', 
                         'Emotional Intelligence Why it can matter nore than IQ',
                         350);
let secondBook = new Book('The Richest Man in Babylon',
                          'George S. Clason',
                          'Why the rich remains rich and the poor remains poor',
                          400);

let thirdBook = new Book('Rich Dad Poor Dad',
                         'Robert Kiyosaki',
                         'A guide to financial freedom',
                         301);

export const books = [firstBook, secondBook, thirdBook];

