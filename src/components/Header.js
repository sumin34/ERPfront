import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand-lg">
      <a class="navbar-brand me-1 me-sm-3" href="/">
        <div class="d-flex align-items-center">
          <img class="me-2" src="assets/img/falcon.png" alt="" width="40" />
          <span class="font-sans-serif text-primary">falcon</span>
        </div>
      </a>
      <div class="collapse navbar-collapse scrollbar" id="navbarStandard">
        <ul class="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/detail">
              Detail
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/orders">
              Orders
            </a>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
        <li class="nav-item dropdown">
          <a
            class="nav-link pe-0 ps-2"
            id="navbarDropdownUser"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="avatar avatar-xl">
              <img class="rounded-circle" src="assets/img/1-thumb.png" alt="" />
            </div>
          </a>
          <div
            class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
            aria-labelledby="navbarDropdownUser"
          >
            <div class="bg-white dark__bg-1000 rounded-2 py-2">
              <a class="dropdown-item fw-bold text-warning" href="#!">
                <span class="fas fa-crown me-1"></span>
                <span>Go Pro</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#!">
                Set status
              </a>
              <a class="dropdown-item" href="../pages/user/profile.html">
                Profile &amp; account
              </a>
              <a class="dropdown-item" href="#!">
                Feedback
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="../pages/user/settings.html">
                Settings
              </a>
              <a
                class="dropdown-item"
                href="../pages/authentication/card/logout.html"
              >
                Logout
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
