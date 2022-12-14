import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link to={"/portal/books"} class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span> All Books</span>
        </Link>
      </li>

      <hr class="sidebar-divider my-0" />

<li class="nav-item active">
  <Link to={"/portal/create-book"} class="nav-link">
    <i class="fas fa-fw fa-tachometer-alt"></i>
    <span>Add books</span>
  </Link>
</li>

     
    </ul>
  )
}

export default Sidebar