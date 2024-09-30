import axios from "axios";

const COURSE_API_URL = "http://localhost:8080";

class GenService {
  retrieveAll() {
    return axios.get(`${COURSE_API_URL}`);
  }

  pAll() {
    return axios.post(`${COURSE_API_URL}` + "/helloworld"
    );
  }
}

export default new GenService();