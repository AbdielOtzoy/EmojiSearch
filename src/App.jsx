
import { useEffect, useState } from 'react'
import './App.css'
import EmojiCard from './components/emojiCard';
import {  Grid,  TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function App() {

  const [emojiList, setemojiList] = useState([]);
  const [isFind, setIsFind] = useState(true);
  
    useEffect(() => {
      return () => {
        fetch('https://emoji-api.com/categories/smileys-emotion?access_key=386411c216cab8f81d8f33c2f57403505648287d')
        .then(res => res.json())
        .then(data => setemojiList(data))
      }
    }, []);


  const searchEmoji = (nameEmoji) => {
    fetch(`https://emoji-api.com/emojis?search=${nameEmoji}&access_key=386411c216cab8f81d8f33c2f57403505648287d`)
          .then(res => res.json())
          .then(data => {
            if(data) {
              setemojiList(data)
              setIsFind(true)
            } else {
              setIsFind(false)
            }
          })

  }


  const isRequired = "This field is required";
  const validationSchema = Yup.object({
    name: Yup.string().required(isRequired),
  })
  return (
    <>
    

      <h2>Find the emoji you want 😇</h2>


      <Formik

      initialValues={{ name: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        searchEmoji(values.name)
        
          
      }}
      >
      <Form>
      <Grid container spacing={2} justifyContent="space-between" alignItems="center" maxWidth={350} margin={'0 auto'}>

      <Grid item> 
      <Field 
        name="name" type="text" as={TextField} label="Search" variant="outlined" className="input-field" />

        <ErrorMessage name="name" component="div" className="error-message"/>
      </Grid>
      <Grid item>
      <button className='boton'>🔍</button>
      
      </Grid>
      </Grid>
        

      </Form>

      </Formik>

      {
        isFind ? 
              <Grid container spacing={2} justifyContent="center" alignItems="center" maxWidth={800} margin={'0 auto'}>

              {emojiList.map((emoji, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <EmojiCard 
                    emojiName={emoji.unicodeName} 
                    character={emoji.character} />

                  </Grid>
                ))}
              </Grid>
         : 
         <h2>Emojis not Found 😿</h2>
      }

      
      
    </>
  )
}

export default App
