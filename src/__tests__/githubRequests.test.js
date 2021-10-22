import axios from "axios";

const endPointUrl = "https://api.github.com/users/gledsonmiranda";

describe('should test request api github', () => {
  test("should return status 200 on github api to user request", async () => {
    const request = await axios.get(`${endPointUrl}`);

    expect(request.status).toBe(200);
  });

  test("should return status 200 on github api to user/repo request", async () => {
    const request = await axios.get(`${endPointUrl}/repos`);

    expect(request.status).toBe(200);
  });

  test("should return status 200 on github api to user/starred request", async () => {
    const request = await axios.get(`${endPointUrl}/starred`);

    expect(request.status).toBe(200);
  });
});
