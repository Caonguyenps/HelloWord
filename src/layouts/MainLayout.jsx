import { BrowserRouter } from "react-router-dom";
import ClientRoutes from "../routes/ClientRoutes";

export default function MainLayout() {
  return (
    <>
      <div className="body-content">
        <BrowserRouter>
          <ClientRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}
