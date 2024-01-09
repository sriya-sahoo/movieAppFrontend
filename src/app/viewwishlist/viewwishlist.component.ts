import { Component , Input, OnInit } from '@angular/core';
import { WishListedMovies } from '../model/wish-listed-movies.model';
import { WishlistServiceService } from '../services/wishlist-service.service';
import { LoginService } from '../services/login.service';
import { MovieResponse } from '../model/movie-response.model';



@Component({
  selector: 'app-viewwishlist',
  templateUrl: './viewwishlist.component.html',
  styleUrl: './viewwishlist.component.css'
})
export class ViewwishlistComponent implements OnInit{
  viewWishlist:WishListedMovies[]=[];
  removeresult="";

   constructor(private wishListService: WishlistServiceService,private loginService: LoginService) { }
   @Input() items: WishListedMovies[] = [];
   ngOnInit() {
    let userName: string | null = this.loginService.getUserName();

    if (userName !== null) {
    console.log(userName);
    this.wishListService.viewWishlistedMovie(userName).subscribe((data: WishListedMovies[]) => {
      this.viewWishlist=data;
      console.log("got the response");
      console.log(this.viewWishlist);
    
    },
    (error) => {
      console.error('Error fetching wishlist:', error);
    }
  );} else {
    console.log("userName is null");
  }
    
   
  }

  
removeFromWishlist(i:WishListedMovies){
console.log(i.title);

this.wishListService.removeFromWishlist(i.title, i.userName).subscribe(
  (response:string) => {
    // Handle successful response
    alert(response);
    console.log('Movie removed successfully:', response);
    this.removeresult = 'Movie removed successfully';
    alert("removed from wishlist");
    window.location.reload();
  },
  (error) => {
    // Handle error
    console.error('Error removing movie:', error);
    this.removeresult = 'Error removing movie';
    window.location.reload();
  }
);
}
}
  