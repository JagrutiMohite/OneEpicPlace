<template>
    <div class="Benefits">
        <div class="container mb-5">
            <div class="row no-gutters border-bottom pb-4 mb-4">
    <div class="col-md-10">
            <h2 class="pb-4 mb-4 font-italic  text-primary">
       Benefits
      </h2>
    </div>
    <div class="col-md-2">
      <!-- Button trigger modal -->
<button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
  Add Benefit
</button>
    </div>
          </div>


<!-- Modal -->
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Add Benefit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
    <div class="form-group">
        <label>Upload Image</label>
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
    <label for="inputProvider" class="col-sm-2 col-form-label">Provider</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputProvider" placeholder="Enter Provider Name">
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
<div class="container mb-5">
  <div class="jumbotron">
    <p class="lead">OFFERED BY ONE EPIC PLACE </p>
  </div>
        </div>
        </div> 
    </div>
</template>

<style scoped lang="scss">
    //Personal CSS
    @import "css/About.css";
</style>

<script>
    //import * as api from '@/services/api_access';
    export default {

    }
</script>
