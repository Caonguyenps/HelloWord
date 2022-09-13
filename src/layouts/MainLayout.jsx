import { BrowserRouter } from "react-router-dom";
import AccountRoutes from "../routes/AccountRoutes";
import ClientRoutes from "../routes/ClientRoutes";

export default function MainLayout() {
  return (
    <>
      <div className="body-content">
        <BrowserRouter>
          <ClientRoutes />
          <AccountRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}
