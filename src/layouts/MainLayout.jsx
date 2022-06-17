import FooterComponent from "../components/Footer/Footer.component";
import HeaderComponent from "../components/Header/Header.component";
import ClientRoutes from "../routes/ClientRoutes";

export default function MainLayout() {
  return (
    <>
      <HeaderComponent />
      <div className="body-content">
        <ClientRoutes />
      </div>
      <FooterComponent />
    </>
  );
}
