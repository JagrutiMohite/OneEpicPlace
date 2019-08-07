<template>
  <div class="Store">
    <div class="container mb-5">
      <div class="row no-gutters border-bottom pb-4 mb-4">
        <div class="col-md-10">
          <h2 class="pb-4 mb-4 font-italic text-primary">Store for Me </h2>
        </div>
        <div class="col-md-2">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
            Public Store
          </button>
        </div>
        </div>

        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Public integration status</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                
                <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Public Store</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Public conference room booking</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Public Event</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1">
          <label class="custom-control-label" for="customSwitch1">This allows guests to purchase a product, a service, a day pass or a plan</label>
          <p>You can check the result on this link : https://getspacial.com/one-epic-place-demo/public/store/products</p>
        </div>
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1">
          <label class="custom-control-label" for="customSwitch1">This allows guests to book conference rooms</label>
          <p>You can check the result on this link : https://getspacial.com/one-epic-place-demo/public/book-a-room</p>
        </div>
          </div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1">
          <label class="custom-control-label" for="customSwitch1">This allows guests to purchase event tickets</label>
          <p>You can check the result on this link : https://getspacial.com/one-epic-place-demo/public/events</p>
        </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Products & Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Plans</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Day Passes</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row no-gutters border-bottom pb-4 mb-4">
              <div class="col-md-8">
                results (0)
              </div>
              <div class="col-md-2">
                Available (0)
              </div>
              <div class="col-md-2">
                Archived (0)
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-10">
            <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">
          Create Category
        </button></div>
        <div class="col-md-2">
        <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
          Add Resourse
        </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
              <a class="dropdown-item" data-toggle="modal" data-target=".bd-example-modal-lg-1">Add Product</a>
              <a class="dropdown-item" data-toggle="modal" data-target=".bd-example-modal-lg-2">Add Services</a>
            </div>
            </div>
            </div>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row no-gutters border-bottom pb-4 mb-4">
              <div class="col-md-8">
                results (0)
              </div>
              <div class="col-md-2">
                Available (0)
              </div>
              <div class="col-md-2">
                Archived (0)
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-10">
              <button type="button" class="btn btn-outline-primary">All</button>
        <button type="button" href="#" class="btn btn-outline-primary">Weekly</button>
        <button type="button" href="#" class="btn btn-outline-primary">Monthly</button>
        <button type="button"  href="#" class="btn btn-outline-primary">Yearly</button></div>
        <div class="col-md-2">
          <button type="button" href="#" class="btn btn-outline-primary">Add Plans</button>
        </div>
            </div>
            
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div class="row no-gutters border-bottom pb-4 mb-4">
              <div class="col-md-8">
                results (0)
              </div>
              <div class="col-md-2">
                Available (0)
              </div>
              <div class="col-md-2">
                Archived (0)
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-10"></div>
        <div class="col-md-2">
          <button type="button" href="#" class="btn btn-outline-primary">Add Day Passes</button>
        </div>
            </div>
          </div>
        </div>
      
          <!-- Modal create category -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add a category</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <form>
            <div class="form-group row">
              <label for="inputcategory" class="col-sm-2 col-form-label">Category</label>
              <div class="col-sm-10">
                <input type="category" class="form-control" id="inputcategory" placeholder="Enter a Category">
              </div>
            </div>
                </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal add product-->
          <div class="modal fade bd-example-modal-lg-1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">Basic Information</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="container">
              <div class="form-group">
                  <label>COVER</label>
                  <div class="input-group">
                      <span class="input-group-btn">
                          <span class="btn btn-default btn-file">
                              <input type="file" id="imgInp">
                          </span>
                      </span>
                  </div>
                  <img id='img-upload'/>
              </div>
          </div>
          <form>
            <div class="form-group row">
              <label for="inputProvider" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputProvider" placeholder="Enter Name">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputDescription" class="col-sm-2 col-form-label">Description</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputDescription" placeholder="Enter Description">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputOffer" class="col-sm-2 col-form-label">Offer</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputOffer" placeholder="Example: 10% on first purchase...">
              </div>
            </div><div class="form-group row">
              <label for="inputUse" class="col-sm-2 col-form-label">How To Use It</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputUse" placeholder="Describe how to use the offer (redeem code, send email etc.)">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputLink" class="col-sm-2 col-form-label">Redemm</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputLink" placeholder="Enter Link">
              </div>
            </div>
          </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">confirm</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal add service-->
          <div class="modal fade bd-example-modal-lg-2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">Basic Information</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="container">
              <div class="form-group">
                  <label>COVER</label>
                  <div class="input-group">
                      <span class="input-group-btn">
                          <span class="btn btn-default btn-file">
                              <input type="file" id="imgInp">
                          </span>
                      </span>
                  </div>
                  <img id='img-upload'/>
              </div>
          </div>
          <form>
            <div class="form-group row">
              <label for="inputProvider" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputProvider" placeholder="Enter Name">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputDescription" class="col-sm-2 col-form-label">Description</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputDescription" placeholder="Enter Description">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputOffer" class="col-sm-2 col-form-label">Offer</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputOffer" placeholder="Example: 10% on first purchase...">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputUse" class="col-sm-2 col-form-label">How To Use It</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputUse" placeholder="Describe how to use the offer (redeem code, send email etc.)">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputLink" class="col-sm-2 col-form-label">Redemm</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputLink" placeholder="Enter Link">
              </div>
            </div>
          </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">confirm</button>
                </div>
              </div>
            </div>
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
