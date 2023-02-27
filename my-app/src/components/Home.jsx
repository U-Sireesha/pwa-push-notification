import { useAppContext } from "../context/AppContext";
// import { Buffer } from "buffer";
export default function Home() {
  // const getBase64 = async (url) => {
  //   let response = await axios(url, {
  //     responseType: "arraybuffer",
  //   });
  //   const res = await Buffer.from(response.data, "binary");
  //   return res.toString("base64");
  // };
  // const [image, setImage] = useState("");
  // useEffect(() => {
  //   (async () => {
  //     setImage(
  //       await getBase64(
  //         "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
  //       )
  //     );
  //   })();
  // }, []);
  // useEffect(() => {
  //   console.dir(image);
  // }, [image]);
  const { images } = useAppContext();
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      {/* <img src={`data:image/jpg;base64,${image}`} alt="random" /> */}

      {/* <img src={img} /> */}
      <img
        src={
          "https://fastly.picsum.photos/id/866/800/400.jpg?hmac=sxL_lzsk2TVLY-OUFV2tHXWPnVHSbTjVg9TrwmVLpzM"
        }
        alt=""
      />
      {/* {images.map((image, i) => {
        return <img key={i} src={image.url} alt={image.title} />;
      })} */}
    </div>
  );
}
