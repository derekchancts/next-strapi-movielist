import faker from "faker";
import axios from "axios";


const GenerateContent = () => {

  const addContent = async () => {
    let i

      for (i = 0; i < 100; i++) {
        const postData = {
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs()
        }

        // console.log(postData)

      //   const generate = await fetch(`${publicRuntimeConfig.API_URL}/posts`, {
      //     method: 'POST',
      //     headers: {
      //         'Accept': 'application/json',
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(postData)
      // })

      // const generateResponse = await generate.json()


        const generateResponse = await axios.post(`${process.env.API_URL}/posts`, postData)
        console.log(generateResponse);
      }
  };


  return (
    <div className="content_container">
      <div className="content">
        <button type="button" className="button" onClick={() => addContent()}>
          Generate Content
        </button>
      </div>
    </div>
  );
};

export default GenerateContent;
