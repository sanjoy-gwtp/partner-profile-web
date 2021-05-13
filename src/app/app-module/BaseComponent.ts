export class BaseComponent {
    public PageSize = 5;
    public CurrentPage = 0;
    public TotalSize = 0;
    public DataSource: any;
    public Datas: any;
    public saveText: string = "Save";
    public updateText: string = "Update";
    public addingNew: boolean = false;
    public pageEvent: any;

    BaseComponent() {

    }

    public handlePage(e: any) {
        this.CurrentPage = e.pageIndex;
        this.PageSize = e.pageSize;
        this.iterator();
    }

    public iterator() {
        const end = (this.CurrentPage + 1) * this.PageSize;
        const start = this.CurrentPage * this.PageSize;
        if (this.Datas) {
            const part = this.Datas.slice(start, end);
            this.DataSource = part;
        }
    }

}