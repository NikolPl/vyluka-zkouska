 
 
 // carousel-references
 var classSlide = ["image1","image2","image3" ]
 var position = [0, 1, 2] 

 function slideCarouselNext(left, middle, right){
    if(left == position[0] && middle == position[1] && right == position[2]) {
         changeImges(left, middle, right);
         plusStep();
         console.log("console log - (1):" +left+middle+ right);
    }

    //position = 1, 2, 0
    else if(position[0] == middle && position[1]== right && position[2] == left){
      //  left = 1;
      //  middle = 2;
      //  right = 0;
       changeImges(left, middle, right);
       plusStep();
       console.log("console log - (2):" +left+ middle+ right);
    }

    // position 2, 0, 1
    else if(position[0] == right && position[1] == left && position[2] == middle){
      //  left = 2;
      //  middle = 0;
      //  right = 1;
       changeImges(left, middle, right);
       plusStep();
       console.log("console log - (3):" +left+ middle+ right);
    }
 }

  function slideCarouselPrev(left, middle, right){
    if(left == position[0] && middle == position[1] && right == position[2]) {
       changeImges(left, middle, right);
       minusStep();
       console.log("console log - minus(1):" +left+middle+ right);
    }

    //position = 1, 2, 0
    else if(position[0] == middle && position[1]== right && position[2] == left){
      //  left = 2;
      //  middle = 0;
      //  right = 1;
       changeImges(left, middle, right);
       minusStep();
       console.log("console log -minus (2):" +left+ middle+ right);
    }

    // position 2, 0, 1
    else if(position[0] == right && position[1] == left && position[2] == middle){
      //  left = 1;
      //  middle = 2;
      //  right = 0;
       changeImges(left, middle, right);
       minusStep();
       console.log("console log - minus(3):" +left+ middle+ right);
    }
  }

 function changeImges(first, second, third){
   var image0 = document.getElementById(classSlide[first]);
   var image1 = document.getElementById(classSlide[second]);
   var image2 = document.getElementById(classSlide[third]);

   image0.src="img/mobile/ref_kristina.png";
   image1.src="img/mobile/ref_jakub.png";
   image2.src="img/mobile/ref_cap.png";

 }

   function plusStep(left, middle, right){
      for(var i = 0; i < 3; i++){
         if(position[i] != 2){
         position[i] = position[i]+1;
         }
         else {
            position[i] = 0;
         }
         console.log(position[i]);
      }
   }

function minusStep(){
   for(var i = 0; i < 3; i++){
      if(position[i] != 0){
         position[i] = position[i]-1;
      }
      else {
         position[i] = 2;
      }
      console.log(position[i]);
   }
}
   
