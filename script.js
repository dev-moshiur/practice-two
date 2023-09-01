
const input = document.getElementById('input')
const mark = document.getElementById('mark')
const gpa = document.getElementById('gpa')
const grade = document.getElementById('grade')
const submit = document.getElementById('submit')
const watchChild= document.getElementsByClassName('watchChild')
const marksheetMaker =(number)=>{
    if (number >= 80) {
        return {
            grade:'A+',
            gpa:5,
            mark:number
        }
        
    }
    else if (number <80 && number >=70) {
        return {
            grade:'A',
            gpa:4,
            mark:number
        }

    }
    else if (number <70 && number >=60) {
        return {
            grade:'A-',
            gpa:3.5,
            mark:number
        }

    }
    else if (number <60 && number >=50) {
        return {
            grade:'B',
            gpa:3,
            mark:number
        }

    }
    else if (number <50 && number >=40) {
        return {
            grade:'C',
            gpa:2,
            mark:number
        }

    }
    else if (number <40 && number >=33) {
        return {
            grade:'D',
            gpa:1,
            mark:number
        }

    }
    else if (number <33 && number >=0) {
        return {
            grade:'F',
            gpa:0,
            mark:number
        }

    }
     else {
        window.alert('mark should be less than or equal 100 and more than or equal 0')
        
    }

}

const handleSubmit = ()=>{


    const data = marksheetMaker(input.value)
    mark.innerHTML=data.mark
    grade.innerHTML=data.grade
    gpa.innerHTML=data.gpa
    // console.log(data)


    
}
const updateTime=()=>{
    document.getElementById('watch').innerHTML=new Date().toLocaleTimeString()
    // const currentTime = new Date()

    // watchChild[0].innerHTML=`${String(currentTime.getHours()).length > 1 ? currentTime.getHours() : '0'+currentTime.getHours()}`
    // watchChild[1].innerHTML=`${String(currentTime.getMinutes()).length > 1 ? currentTime.getMinutes() : '0'+currentTime.getMinutes()}`
    // watchChild[2].innerHTML=`${String(currentTime.getSeconds()).length > 1 ? currentTime.getSeconds() : '0'+currentTime.getSeconds()}`
}
updateTime()
setInterval(() => {
    updateTime()
    
}, 1000);

// submit.addEventListener('click',handleSubmit)

