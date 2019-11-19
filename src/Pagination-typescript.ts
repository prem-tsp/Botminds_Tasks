
class PaginationTypescript
{
    elementsPerPage: number;
    recordsSize: number;
    elementArr: any[] = [];
    totalPages: number;
    records: any;
    pageNo: number;
    msg: string;
    current: any[] = [];
    ele: string[];
    isFirst : boolean = true;
    isLast : boolean = false

    constructor(elementsPerPage: number, records: any[])
    {
        this.elementsPerPage = elementsPerPage;
        this.recordsSize = records.length;
    
        this.pageNo = 1
        this.msg = ""
        this.ele = []
        this.totalPages = Math.ceil(this.recordsSize/this.elementsPerPage)
        this.records = records
        this.changePage(1) 
    }

    changePage(pageNo: number)
    {
        this.pageNo = pageNo;
        if(pageNo < 1) 
        {
            this.pageNo = 1;
            pageNo = 1;
        }
        if(pageNo > this.totalPages)
        {
            this.pageNo = this.totalPages;
            pageNo = this.totalPages;
        }
    
        if(pageNo == this.totalPages)
        {
            this.msg = `Prints records from ${(this.pageNo - 1) * this.elementsPerPage} to ${this.recordsSize - 1}`;
            this.current = []
            this.isLast = true
            for(let i = (this.pageNo - 1) * this.elementsPerPage, j = 0;i < this.recordsSize; i++, j++)
            {
                this.elementArr.push(this.records[i]);
                this.current[j] = this.records[i]
            }    
            
        }
        else{
            this.msg = `Prints records from ${(this.pageNo - 1) * this.elementsPerPage} to ${this.pageNo * this.elementsPerPage - 1}`;
            this.isLast = false
            if(pageNo != 1)
                this.isFirst = false
            else this.isFirst = true

            for(let i = (this.pageNo - 1) * this.elementsPerPage,j = 0;i < this.pageNo * this.elementsPerPage; i++, j++)
            {
                this.elementArr.push(this.records[i]);
                this.current[j] = this.records[i];
            }
        }
    }

    next(): any[]
    {
        if(this.pageNo < 1 || this.pageNo >= this.totalPages)
        { 
            this.msg = "No pages found"
            this.ele = [this.msg]
            return this.ele
        }
        else{
            this.pageNo++;
            this.changePage(this.pageNo);
            
            return this.current
        }
    }

    prev(): any[]
    {
        if(this.pageNo <= 1 || this.pageNo > this.totalPages)
        { 
            this.msg = "No pages found"
            this.ele = [this.msg]
            return this.ele
        }
        else{
            this.pageNo--;
            this.changePage(this.pageNo);
            return this.current
        }
    }

}

module.exports = PaginationTypescript;

