// /*
let data;
const xhr = new XMLHttpRequest();
const gitUserURL = 'https://api.github.com/users/Razi9913'//hiteshchoudhary
let country,id,name,avatar_url,gitURL,tryName;

xhr.open('GET',gitUserURL)
console.log(`State is ${xhr.readyState}`);
xhr.onload=function () {
    if(xhr.readyState === 4){
        data=JSON.parse(this.responseText)//converting string to json
        // console.log(data);//typeof is string and converting into json and typeof is object
        avatar_url=data.avatar_url;
        name=data.name;
        created_at=data.created_at;
        timeArray = created_at.split('T')
        homeURL=data.html_url;
        id=data.id;
        bio=data.bio;
        country=data.location;
        followers=data.followers;
        following=data.following;

        // console.log(name);
        document.querySelector('#name').innerHTML=`${name}`
        // console.log(avatar_url);
        document.querySelector('#userImage').src=`${avatar_url}`
        // console.log(created_at);
        document.querySelector('#created_at').innerHTML=`<b>created at : </b>${timeArray[0]}`
        // console.log(homeURL);
        document.querySelector('#html_url').innerHTML=`${homeURL}`
        // console.log(id);
        document.querySelector('#id').innerHTML=`${id}`
        // console.log(bio);
        document.querySelector('#bio').innerHTML=`${bio}`
        // console.log(country);
        document.querySelector('#country').innerHTML=`${country}`
        // console.log(followers+' '+following);
        document.querySelector('#fans').innerHTML=`<b>Followers: </b>${followers} <b>Following: </b>${following}`
    }
}
xhr.send()
// */

console.log(this);