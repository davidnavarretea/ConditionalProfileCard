/* Selectors */
/* Name */
const nameinput = document.querySelector('#nameinput');
const nameoutput = document.querySelector('.cardname');
/* Last Name */
const lastnameinput = document.querySelector('#lastnameinput');
const lastnameoutput = document.querySelector('.cardlastname');
/* Twitter */
const twitterinput = document.querySelector('#twitterinput');
const twitteroutput = document.querySelector('#twitteroutput');
/* Github */
const githubinput = document.querySelector('#githubinput');
const githuboutput = document.querySelector('#githuboutput');
/* Linkedin */
const linkedininput = document.querySelector('#linkedininput');
const linkedinoutput = document.querySelector('#linkedinoutput');
/* Instagram */
const instagraminput = document.querySelector('#instagraminput');
const instagramoutput = document.querySelector('#instagramoutput');
/* Cover */
const coverinput = document.querySelector('#coverbutton');
const coveroutput = document.querySelector('#backgroundcardid');
/* Seniority */
const seniorityinput = document.querySelector('#senioritybutton');
const seniorityoutput = document.querySelector('.cardseniority');
/* Role */
const roleinput = document.querySelector('#rolebutton');
const roleoutput = document.querySelector('.cardrole');
/* City */
const cityinput = document.querySelector('#citybutton');
const cityoutput = document.querySelector('.cardcity');
/* Country */
const countryinput = document.querySelector('#countrybutton');
const countryoutput = document.querySelector('.cardcountry');
/* Modify Outputs */
/* Inputs */
/* Name */
nameinput.addEventListener('input', e => {
    nameoutput.textContent = e.target.value;
})
/* Last Name */
lastnameinput.addEventListener('input', e => {
    lastnameoutput.textContent = e.target.value;
})
/* Twitter */
twitterinput.addEventListener('input', e => {
    twitteroutput.href = `https://twitter.com/${e.target.value}`;
})
/* GitHub */
githubinput.addEventListener('input', e => {
    githuboutput.href = `https://github.com/${e.target.value}`;
})
/* LinkedIn */
linkedininput.addEventListener('input', e => {
    linkedinoutput.href = `https://linkedin.com/in/${e.target.value}`;
})
/* Instagram */
instagraminput.addEventListener('input', e => {
    instagramoutput.href = `https://instagram.com/${e.target.value}`;
})
/* Select */
/* Seniority */
seniorityinput.addEventListener('change', e => {
    seniorityoutput.textContent = e.target.value;
})
/* Role */
roleinput.addEventListener('change', e => {
    roleoutput.textContent = e.target.value;
})
/* City */
cityinput.addEventListener('change', e => {
    cityoutput.textContent = e.target.value;
})
/* Country */
countryinput.addEventListener('change', e => {
    countryoutput.textContent = e.target.value;
})
/* Cover */
coverinput.addEventListener('change', e => {
    coveroutput.classList.toggle('backgroundcardurl')
})