<template>
    <div class="Helpdesk">
        <div class="container mb-5 border-bottom">
          <div class="row no-gutters border-bottom pb-4 mb-4">
    <div class="col-md-10">
            <h2 class="pb-4 mb-4 font-italic text-primary">
       Help Desk
      </h2>
    </div>
    <div class="col-md-2">
      <!-- Button trigger modal -->
<button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
  Create Ticket
</button>
    </div>
          </div>

  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Create a ticket</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="text-muted">CHOOSE THE CATEGORY</p><hr>
        <div class="row no-gutters">
    <div class="col-md-3">
  <a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Wifi</a></div>
  <div class="col-md-3"> <a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Printer</a></div>
   <div class="col-md-3"> <a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Equipment</a></div>
    <div class="col-md-3"> <a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Temperature</a></div></div>
  <hr>
  <div class="row no-gutters">
    <div class="col-md-3">
   <a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Lighting</a></div>
    <div class="col-md-3"><a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Noise</a></div>
     <div class="col-md-3"><a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Furniture</a></div>
      <div class="col-md-3"><a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Cleanliness</a></div></div>
      <hr>
       <div class="row no-gutters">
    <div class="col-md-3">
   <a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Door Access</a></div>
     <div class="col-md-3"><a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Invoice</a></div>
      <div class="col-md-3"><a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Conference Room</a></div>
      <div class="col-md-3"> <a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Kitchen</a></div></div>
      <hr>
       <div class="row no-gutters">
    <div class="col-md-3">
    <a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Membership</a></div>
     <div class="col-md-3"><a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Event</a></div>
      <div class="col-md-3"><a data-toggle="modal" data-target=".bd-example-modal-lg-1" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Other</a></div></div>
      </div>
    </div>
  </div>
          </div>

       <div class="modal fade bd-example-modal-lg-1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Create a ticket</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="text-muted">CHOOSE THE CATEGORY</p><hr>  
        <br>
        <br> 
        <br>
         <div class="row no-gutters">
    <div class="col-md-3">
  <a href="#" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Not Working</a></div>
  <div class="col-md-3"> <a href="#" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Too Slow</a></div>
   <div class="col-md-3"> <a href="#" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Unreliable</a></div>
    <div class="col-md-3"> <a href="#" role="button" class="btn btn-outline-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Other</a></div></div>
      <br>
        <br>
        <br>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
      </div>
    </div>
  </div>
       </div>
        
  <div class="container">
    <div class="row no-gutters">
    <div class="col-md-2">
      <span class="text-muted">Tickets</span>
        <i class="fa fa-code fa-2x"></i>
      <h4 class="timer count-title count-number" data-to="100" data-speed="1500">0</h4>
    </div>
    <div class="col-md-3">
      <nav class="navbar navbar-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
  </form>
</nav>
    </div>
       <div class="col-md-1"></div>
    <div class="col-md-3">
      <div class="d-flex">
  <div class="dropdown mr-1">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Ticket status
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <a class="dropdown-item" href="#">Open</a>
      <a class="dropdown-item" href="#">Close</a>
    </div>
  </div>
</div>
    </div>
    <div class="col-md-3">
      <div class="d-flex">
  <div class="dropdown mr-1">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Assigned
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <a class="dropdown-item" href="#">Employees</a>
      <a class="dropdown-item" href="#">Julia Robbins</a>
      <a class="dropdown-item" href="#"> Michelle Cadieux</a>
    </div>
  </div>
</div>
    </div>
    </div>
  </div>
        </div>
        <div class="container mb-5">
  <div class="jumbotron">
    <p class="lead">No tickets open in the help desk yet!</p>
  </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    //Personal CSS
    @import "css/About.css";
    .counter-Txt{text-align:center; font-size:20px; font-weight:bold; text-transform:uppercase; margin-top:20px;}
</style>

<script>
    //import * as api from '@/services/api_access';
    export default {

    }
</script>
