import axios from "axios";
import headerConfig from "../utils/headerConfig";
import { API_BASE_URL, hitsPerPage } from "../utils/constants";
const commonUrl = `${API_BASE_URL}search?hitsPerPage=${hitsPerPage}&`,
  Api = {
    fetchFrontPage() {
      return axios({
        url: `${commonUrl}tags=front_page`,
        method: "get",
        headers: headerConfig.getAppJson()
      });
    },
    fetchPageQuery(pageNumber) {
      return axios({
        url: `${commonUrl}page=${pageNumber}`,
        method: "get",
        headers: headerConfig.getAppJson()
      });
    },
    fetchStoryQuery(storyQuery) {
      return axios({
        url: `${commonUrl}query=${storyQuery}&restrictSearchableAttributes=url`,
        method: "get",
        headers: headerConfig.getAppJson()
      });
    }
  };
export default Api;
