import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import './Sliderimage.css'
 
const MyCollection = [
  {
  
    imgPath:
"https://tfipost.com/wp-content/uploads/2021/12/swachh_bharat_abhiyan_poster-1024x576.jpg",
  },
  {
    
    imgPath:
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaDykA24ISA8-hIcs5DsjGtK2GbUfxudaQA&usqp=CAU",
  },
  {
   
    imgPath:
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSud_s7qO1KBHPJjcAQGofJGzOSR6VbrPW4Iw&usqp=CAU",
  },
];

function Sliderimage() {
    const CollectionSize = MyCollection.length;
    const theme = useTheme();
    const [index, setActiveStep] = React.useState(0);
   
    const goToNextPicture = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

  return (
    <div className='mainsliderimage'>
         <div
      
    >
      
      <div
        style={{
          maxWidth: 400,
          flexGrow: 1,
        }}
      >
        
        <img className="imageofslides"
          src={MyCollection[index].imgPath}
          
          alt={MyCollection[index].label}
        />
        <MobileStepper
          variant="text"
          position="static"
          index={index}
          steps={CollectionSize}
          nextButton={
            <Button
              className="buttonofslides"
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
            >
              Next
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </div>
    </div>
  )
}

export default Sliderimage