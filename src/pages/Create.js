import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getCategories, addVideo } from '../api/video';
import{useState, useEffect} from "react";


const Header = styled.h1`
      font-size: 1.8rem;
      font-weight: bold;
      padding: 20px 0;
`;

const Create = () => {
    const[categories, setCategories] = useState([]);
    const[title, setTitle] = useState(""); 
    const[desc, setDesc] = useState();
    const[video, setVideo] = useState(null);
    const[image, setImage] = useState(null);
    const[select, setSelect] = useState(1);
    

    const categoryAPI = async () => {
       const result =  await getCategories();
       setCategories(result.data);
    };

    useEffect(() => {
        categoryAPI();
    }, []);

    const onClick=() =>{
      console.log(title);
      console.log(desc);
      console.log(image);
      console.log(video);
      console.log(select);


      // 위의 값들을 addVideo로 전달할 때 form-data형식사용
      const formData = new FormData(); 
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("video", video);
      formData.append("categoryCode", select);

      addVideo(formData);

    };
   
    const onUploadImage=(e) => {
        //console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    };
    const onUploadVideo=(e)=>{
       setVideo(e.target.files[0]);
    };
    const onChangeCategory=(e) =>{  // select는 현재 값 접근 할 때 currentTarget
      setSelect(e.currentTarget.value);
      
       
    };

    return <Container>
        <Header>동영상 업로드</Header>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목 입력" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>내용 입력</Form.Label>
        <Form.Control as="textarea" rows={3} value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      </Form.Group>

      <Form.Group  className="mb-3">
        <Form.Label>썸네일 이미지</Form.Label>
        <Form.Control type="file" onChange={onUploadImage} />
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label>동영상 파일</Form.Label>
        <Form.Control type="file" onChange={onUploadVideo}/>
      </Form.Group>

      <Form.Select onChange={onChangeCategory} value={select}>
        {categories.map((category)=> (
            <option value={category.categoryCode} key={category.categoryCode}>{category.categoryName}</option>
        ))}
      
    </Form.Select>

    <Button variant="danger" style={{marginTop:"20px"}} onClick={onClick}>저장</Button>
    </Form>
    </Container>;
};
export default Create;
