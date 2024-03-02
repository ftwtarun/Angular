import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service'
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  username: string = '';
  movieName: string = '';
  movieDetails: any = '';
  showElement: boolean = false;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  value: string = 'second';
  isActive: boolean = false;
  isDisabled: boolean = false;
  textColor: string = 'blue';
  fontSize: number = 16;
  name: string = '';
  today: Date = new Date();
  object: any = { key1: 'value1', key2: 'value2' }
  isLoading = false;


  

  constructor(private _apiCall: ApiServiceService) {

  }

  ngOnInit() {
    // this.searchMovie()
  }

  searchMovie() {
    const apiKey = 'db74b55c';
    this.isLoading = true;
  
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${this.movieName}`;
    this._apiCall.getApiCall(apiUrl).subscribe({

      next: (value) => {
        this.isLoading=false;
        this.formatMovieData(value)},
      error: (error) => {
          this.isLoading = false;
        console.error('Observable error:', error)},
      complete: () => {
          this.isLoading = false;
        console.log('Observable completed')},
    });
    
  }


  formatMovieData(value : any) {
    value.Runtime = value.Runtime.split(" ")[0];
    this.movieDetails   = value
  }

  handleClick() {
    console.log('Button clicked!');
  }

  handleMouseOver() {
    console.log('Mouse over event');
  }

  handleMouseOut() {
    console.log('Mouse out event');
  }

  handleKeyDown(event: KeyboardEvent) {
    console.log('Key down event:', event.key);
  }

  handleKeyUp(event: KeyboardEvent) {
    console.log('Key up event:', event.key);
  }

  handleFocus() {
    console.log('Input focused');
  }

  handleBlur() {
    console.log('Input blurred');
  }

  handleChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected value:', selectedValue);
  }

  handleSubmit() {
    console.log('Form submitted');
  }
}


// ng generate pipe modules/movie-app/minutesToHours