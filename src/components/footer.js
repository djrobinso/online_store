import React from 'react';

const Footer = () => {
  return (

  <footer class = "page-footer font-small special-color-dark pt-4" >

    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-4">
          <form class="form-inline">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            <i class="fa fa-search" aria-hidden="true" ></i>
          </form>
        </div>

      <div class="col-md-6 mb-4">
        <form class="input-group">
          <input type="text" class="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2" />
            <div class="input-group-append">
              <button class="btn btn-sm btn-outline-white" type="button">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/">
        MDBootstrap.com</a>
    </div>

  </footer>

  )
}

export default Footer
