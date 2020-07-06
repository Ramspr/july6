import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //this.calculateTotalPremium();
  }

  //calculated field (total)
  totalExpense;
  totalExpenseSA = 0;

  /*calculateTotalPremium(){
    var test1 = document.getElementsByClassName('expenseSA');
    console.log(test1);
    for(let i=0;i<test1.length;i++){
      var htmlstring = test1[i].innerHTML;
      console.log(htmlstring);
      htmlstring = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');
      if(htmlstring == "" || htmlstring == null){
        htmlstring = "0";
      }
      this.totalExpense+=parseInt(htmlstring);
    }
    //this.totalExpense = this.getValue("excessAllocation") + this.getValue("aggInsAllocation") + this.getValue("gaAllocation") + this.getValue("claimsAllocation") + this.getValue("intelAllocation") + this.getValue("basicAllocation") + this.getValue("captiveAllocation");  
    }*/

  /*getValue(id){
    var test1 = document.getElementsByClassName("expenseSA");
    for(let i=0;i<test1.length;i++){
      var htmlstring = test1[i].innerHTML;
    }
    var htmlstring = document.getElementById(id).innerHTML;
    htmlstring = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');
    if(htmlstring == "" || htmlstring == null){
      return 0;
    }
    return parseInt(htmlstring);*/
  title = 'lraro';

  //Expand Collapse control
  aggInsuranceExpanded = true; 
  gaExpanded = true; 
  claimsExpanded = true; 
  intelExpanded = true; 
  basicExpanded = true; 
  captiveExpanded = true; 
  totalExpanded = true; 
  enhancedLossControl = true; 
  claimsServiceFees = true; 
  producerCommission  = true;
  excessExpanded = true; 

  // excess related calculation
  /*excessUW; //ng-model for excess premium expense
  excessVariance;
  excessVariancePercentage;
  
  onExcessSAChange(amountInput) {
    if(amountInput == ""){
      this.excessVariance = "";
      this.excessVariancePercentage = "";
    }else{
      var excess_variance = document.getElementById("excessAllocation").innerHTML;
      this.excessVariance = parseInt(excess_variance) - amountInput;
      this.excessVariancePercentage = ((amountInput / parseInt(excess_variance))* 100).toFixed(2);
    }
  }

  onExcessMASAChange(amountInput){

  }

  onExcessFLSAChange(amountInput){

  }*/
  
  //Aggregate Insurance Charge
  aggInsUW; //ng-model for aggregate insurance charge expense
  aggInsVariance;
  aggInsVariancePercentage;x

  onAggInsuranceSAChange(amountInput) {
    if(amountInput == ""){
      this.aggInsVariance = "";
      this.aggInsVariancePercentage = "";
    }else{
      var aggIns_variance = document.getElementById("aggInsAllocation").innerHTML;
      this.aggInsVariance = parseInt(aggIns_variance) - amountInput;
      this.aggInsVariancePercentage = ((amountInput / parseInt(aggIns_variance))* 100).toFixed(2);
    } 
  }

  onAggInsuranceMASAChange(amountInput){

  }

  onAggInsuranceFLSAChange(amountInput){

  }

  //General & Administration
  gaExpandedUW;
  gaVariance;
  gaVariancePercentage;

  onGenAdminSAChange(amountInput) {
    if(amountInput == ""){
      this.gaVariance = "";
      this.gaVariancePercentage = "";
    }else{
      var ga_variance = document.getElementById("aggInsAllocation").innerHTML;
      this.gaVariance = parseInt(ga_variance) - amountInput;
      this.gaVariancePercentage = ((amountInput / parseInt(ga_variance))* 100).toFixed(2);
    } 
  }

  onGenAdminMASAChange(amountInput){

  }

  onGenAdminFLSAChange(amountInput){
    
  }
  //Claims Expanded 

  claimsExpandedUW;
  claimsVariance;
  claimsVariancePercentage;

  onClaimsServiceSAChange(amountInput) {
    if(amountInput == ""){
      this.claimsVariance = "";
      this.claimsVariancePercentage = "";
    }else{
      var claims_variance = document.getElementById("aggInsAllocation").innerHTML;
      this.claimsVariance = parseInt(claims_variance) - amountInput;
      this.claimsVariancePercentage = ((amountInput / parseInt(claims_variance))* 100).toFixed(2);
    } 
  }

  onClaimsServiceMASAChange(amountInput){

  }

  onClaimsServiceFLSAChange(amountInput){

  }

  //Intellirisk 

  intelliriskUW;
  intelliriskVariance;
  intelliriskVariancePercentage;

  onIntelliriskSAChange(amountInput) {
    if(amountInput == ""){
      this.intelliriskVariance = "";
      this.intelliriskVariancePercentage = "";
    }else{
      var intellirisk_variance = document.getElementById("aggInsAllocation").innerHTML;
      this.intelliriskVariance = parseInt(intellirisk_variance) - amountInput;
      this.intelliriskVariancePercentage = ((amountInput / parseInt(intellirisk_variance))* 100).toFixed(2);
    } 
  }

  onIntelliriskMASAChange(amountInput){

  }

  onIntelliriskFLSAChange(amountInput){

  }

  //Basic Loss Control

  basicLossUW;
  basicLossVariance;
  basicLossVariancePercentage;

  onBasicLossSAChange(amountInput) {
    if(amountInput == ""){
      this.basicLossVariance = "";
      this.basicLossVariancePercentage = "";
    }else{
      var basicLoss_variance = document.getElementById("aggInsAllocation").innerHTML;
      this.basicLossVariance = parseInt(basicLoss_variance) - amountInput;
      this.basicLossVariancePercentage = ((amountInput / parseInt(basicLoss_variance))* 100).toFixed(2);
    } 
  }

  onBasicLossMASAChange(amountInput){

  }

  onBasicLossFLSAChange(amountInput){

  }
  //Captive Management Fees

  captMgmtUW;
  captMgmtVariance;
  captMgmtVariancePercentage;

  onCaptiveManagementSAChange(amountInput) {
    if(amountInput == ""){
      this.captMgmtVariance = "";
      this.captMgmtVariancePercentage = "";
    }else{
      var captMgmt_variance = document.getElementById("aggInsAllocation").innerHTML;
      this.captMgmtVariance = parseInt(captMgmt_variance) - amountInput;
      this.captMgmtVariancePercentage = ((amountInput / parseInt(captMgmt_variance))* 100).toFixed(2);
    } 
  }

  onCaptiveManagementMASAChange(amountInput){

  }

  onCaptiveManagementFLSAChange(amountInput){

  }
}
