const { performance, PerformanceObserver } = require(perf_hooks);

function dayOneTwoCalculator() {

    const textBoxId1 = ["g26c7ef15cc2_5_1","g26b0d2d950d_2_0","g26b0d2d950d_2_2","g26ad0d43957_8_6", "g26ad0d43957_0_64","g26ad0d43957_6_81"];
    const textBoxId2 = ["g1f51be7876c_3_1","g26b0d2d950d_2_1","g26b0d2d950d_2_3","g26b0d2d950d_2_38", "g26e95730db9_0_1", "g26b0d2d950d_2_40", "g2cf58bd7859_0_20", "g2cf58bd7859_0_57"];
    
  
    var d = new Date(); 
  
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const title = "Day 2";
    const slides = SlidesApp.getActivePresentation();
  
    const now = new Date();
    for(var i = 0; i < slides.getSlides().length; i++){
      const slide = slides.getSlides()[i];
      for(var j = 0; j < textBoxId1.length; j++){
        var textboxShape = null;
        if(slide.getPageElementById(textBoxId1[j]) != null){
          textboxShape = slide.getPageElementById(textBoxId1[j]).asShape(); 
        const content = textboxShape.getText();
        if(now.getDate()%2 == 0){  
          content.setText("Day 2");
        }
        else{
          content.setText("Day 1");
        }      
        
        
        }// Inspect the Textbox element and get the id from the XPath.
        
  
      }
   
       for(var j = 0; j < textBoxId2.length; j++){
        if(slide.getPageElementById(textBoxId2[j]) != null){ 
              const textboxShape2 = slide.getPageElementById(textBoxId2[j]).asShape(); // Inspect the Textbox element and get the id from the XPath.
              const content2 = textboxShape2.getText();
     
          if(d.getMinutes() < 10){
            content2.setText(d.getHours() + ":0" + d.getMinutes() +  "   " + monthNames[d.getMonth()] + " " + d.getDate());
          }
          else{
            content2.setText(d.getHours() + ":" + d.getMinutes() +  "   " + monthNames[d.getMonth()] + " " + d.getDate());    
          }
        }
      }
    }
    let start = Date.now();
    dayOneTwoCalculator()
    let timeTaken = Date.now() - start;
    console.log("Total time taken : " + timeTaken + " milliseconds");
  }