export function createPages(pages, pagesCount, currentPage) {
    if(pagesCount > 6) {
        if(currentPage > 3) {
            for (let i = currentPage-2; i <= currentPage+2; i++) {
                pages.push(i)
                // eslint-disable-next-line eqeqeq
                if(i == pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 5; i++) {
                pages.push(i)
                // eslint-disable-next-line eqeqeq
                if(i == pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}



