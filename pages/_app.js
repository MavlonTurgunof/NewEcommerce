import "@/styles/globals.css";
import { ProductProvider } from "@/container/context/ProductContext";

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}
