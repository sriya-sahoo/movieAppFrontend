export class MovieResponse {

    title:string='';
    rating:string='';
    id:string='';
    year:number=0;
    description:string='';
    image:string='';
constructor(title:string,rating:string,id:string,year:number,description:string,image:string){
    this.title=title;
    this.rating=rating;
    this.id=id;
    this.year=year;
    this.description=description;
    this.image=image;
}
}
