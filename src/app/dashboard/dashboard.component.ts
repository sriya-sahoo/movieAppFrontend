import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieResponse } from '../model/movie-response.model';
import { LoginService } from '../services/login.service';
import { WishListedMovies } from '../model/wish-listed-movies.model';
import { WishlistServiceService } from '../services/wishlist-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  isButton1Active =true;
  isButton2Active= false;
  wish: WishListedMovies = new WishListedMovies();
  viewWishlist:WishListedMovies[]=[];
  movies: MovieResponse[]=[];
  Wishlistmovie={
  userName:'',
	title:'',
	rating:'',
  id:'',
  year:0,
	description:'',
	image:''
}
 constructor(private movieSerivce:MovieService, private wishlist: WishlistServiceService, private loginService:LoginService,private router: Router){}
 ngOnInit(): void {
  
  this.movieSerivce.getMovies().subscribe(
    (data: MovieResponse[]) => {
      this.movies = data;
      console.log(this.movies);
    },
    (error) => {
      console.error('Error fetching movies:', error);
    }
  );
}
setUserName(userName: any): void {
  // Set userName using 'any' type
  this.Wishlistmovie.userName = userName as any;
}
onWishlist(movie:MovieResponse)
{
  console.log(movie);
  this.Wishlistmovie.id=movie.id;
  this.Wishlistmovie.description=movie.description;
  this.Wishlistmovie.image=movie.image;
  this.Wishlistmovie.rating=movie.rating;
  this.Wishlistmovie.title=movie.title;
  this.Wishlistmovie.year=movie.year;
  this.setUserName( sessionStorage.getItem('userName'));
  console.log(this.Wishlistmovie);
  console.log("clicked on wishlist");
  
  this.wishlist.addMovieToWishlist(this.Wishlistmovie).subscribe(
    (data: WishListedMovies) => {
      this.wish = data;
      console.log(this.wish);
      alert("Movie added to wishlist ");
    },
    (error: any) => {
      alert(error);
      console.error('Error fetching movies:', error);
    }
  );
}

viewWishlistedMovie(){
  
      this.router.navigate(['/viewWishlist']);
   
   
  }
  

  
 

}