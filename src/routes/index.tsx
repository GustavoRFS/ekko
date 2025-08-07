import Overlay from "@/pages/overlay";
import Configuration from "../pages/configuration";
import { Route, Router } from "@solidjs/router";
import Call from "@/pages/call";


export default function Routes() {
  return (<Router >
    <Route path="/" component={Call} />
    <Route path="/overlay" component={Overlay} />
  </Router>
  )
}