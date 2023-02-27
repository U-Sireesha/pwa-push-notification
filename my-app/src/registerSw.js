import axios from "axios";
const registerSw = async () => {
  try {
    const publicKey =
      "BGoJtbfsETv4VF8rDvCriirfThmrGrL_233BpNOf9gPicU2Wtri4rr6uRUhDDLkNuxYfe00Vlggyny096PgobnY";
    const register = await navigator.serviceWorker.register(
      `${process.env.PUBLIC_URL}/sw.js`
    );
    console.log("success", register.scope);
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey),
    });
    await axios.post("/subscribe", subscription);
  } catch (err) {
    console.log("failure", err);
  }

  // Send Push Notification
};

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
export default registerSw;
