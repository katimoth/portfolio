import Header from "../components/header";
import Layout from "../components/layout";

export default function Experiences() {
  return (
    <Layout>
      <Header />
      <div class="container mt-3 mb-3">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <h4>Recent Experiences</h4>
            <ul class="timeline">
              <li>
                <a target="_blank" href="https://www.totoprayogo.com/#">New Web Design</a>
                <a href="#" class="float-end">21 March, 2014</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
              </li>
              <li>
                <a href="#">21 000 Job Seekers</a>
                <a href="#" class="float-end">4 March, 2014</a>
                <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
              </li>
              <li>
                <a href="#">Awesome Employers</a>
                <a href="#" class="float-end">1 April, 2014</a>
                <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}