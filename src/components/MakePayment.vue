<script>

</script>

<template>
<h1></h1>
<div class="comtainer">
    <h1 class="text text-info">Mary's Institute Automated School Fees Payment System</h1>
    <form id="paymentForm">

      <div class="form-group">
        <label for="student_name">Student Name:</label>
        <input type="text" id="student_name" name="student_name" required>
      </div>
      <div class="form-group">
        <label for="matric_no">Matri No:</label>
        <input type="text" id="student_id" name="student_id" required>
      </div>
      <div class="form-group">
        <label for="amount">Payment Amount:</label>
        <input type="text" id="amount" name="amount" required>
      </div>
      <div class="form-group">
        <label for="card_number">Card Number:</label>
        <input type="text" id="card_number" name="card_number" required>
      </div>
      <div class="form-group">
        <label for="expiry_date">Expiry Date:</label>
        <input type="text" id="expiry_date" name="expiry_date" required>
      </div>
      <div class="form-group">
        <label for="cvv">CVV:</label>
        <input type="password" id="cvv" name="cvv" required>
      </div>
      <button type="submit" class="btn btn-success">Pay Now</button>
      <button type="reset" class="btn btn-info">Clear</button>
    </form>
</div>
</template>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
  }
  
  .comtainer {
    max-width: 800px;
    margin: 20px auto;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  
  h1 {
    text-align: center;
  }
  
  form {
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    font-size: large;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .btn {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .btn:hover {
    background-color: #45a049;
  }
  
  #paymentResult {
    margin-top: 20px;
    text-align: center;
  }
  
</style>