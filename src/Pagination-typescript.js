var PaginationTypescript = /** @class */ (function () {
    function PaginationTypescript(elementsPerPage, records) {
        this.elementArr = [];
        this.current = [];
        this.isFirst = true;
        this.isLast = false;
        this.elementsPerPage = elementsPerPage;
        this.recordsSize = records.length;
        this.pageNo = 1;
        this.msg = "";
        this.ele = [];
        this.totalPages = Math.ceil(this.recordsSize / this.elementsPerPage);
        this.records = records;
        this.changePage(1);
    }
    PaginationTypescript.prototype.changePage = function (pageNo) {
        this.pageNo = pageNo;
        if (pageNo < 1) {
            this.pageNo = 1;
            pageNo = 1;
        }
        if (pageNo > this.totalPages) {
            this.pageNo = this.totalPages;
            pageNo = this.totalPages;
        }
        if (pageNo == this.totalPages) {
            this.msg = "Prints records from " + (this.pageNo - 1) * this.elementsPerPage + " to " + (this.recordsSize - 1);
            this.current = [];
            this.isLast = true;
            for (var i = (this.pageNo - 1) * this.elementsPerPage, j = 0; i < this.recordsSize; i++, j++) {
                this.elementArr.push(this.records[i]);
                this.current[j] = this.records[i];
            }
        }
        else {
            this.msg = "Prints records from " + (this.pageNo - 1) * this.elementsPerPage + " to " + (this.pageNo * this.elementsPerPage - 1);
            this.isLast = false;
            if (pageNo != 1)
                this.isFirst = false;
            else
                this.isFirst = true;
            for (var i = (this.pageNo - 1) * this.elementsPerPage, j = 0; i < this.pageNo * this.elementsPerPage; i++, j++) {
                this.elementArr.push(this.records[i]);
                this.current[j] = this.records[i];
            }
        }
    };
    PaginationTypescript.prototype.next = function () {
        if (this.pageNo < 1 || this.pageNo >= this.totalPages) {
            this.msg = "No pages found";
            this.ele = [this.msg];
            return this.ele;
        }
        else {
            this.pageNo++;
            this.changePage(this.pageNo);
            return this.current;
        }
    };
    PaginationTypescript.prototype.prev = function () {
        if (this.pageNo <= 1 || this.pageNo > this.totalPages) {
            this.msg = "No pages found";
            this.ele = [this.msg];
            return this.ele;
        }
        else {
            this.pageNo--;
            this.changePage(this.pageNo);
            return this.current;
        }
    };
    return PaginationTypescript;
}());
module.exports = PaginationTypescript;
