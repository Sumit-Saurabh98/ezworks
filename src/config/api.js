
const API_URL = process.env.REACT_APP_API_ENDPOINT

export async function submitEmail(email) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const res = await response.json();
    console.log(res)

    if (response.status === 200) {
      return { success: true, message: res.message };
    } else {
      return { success: false, error: res.detail };
    }
  } catch (error) {
    return { success: false, error: "API Error" };
  }
}
