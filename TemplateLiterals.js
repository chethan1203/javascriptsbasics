    //java script literals using --> back ticks the key before 1 ``

    const str = `This is first line
    thsi is secodn line
                         this is the third line`;
    let name = 'Chethan';
    const str1 = `Hi ${name} please include
        me in meeting i think
            i got missed in mail`;
    let math = function(){
        return 10;
    };
    const str2 = `Hi ${name} please include
        me in meeting i think
            i got missed in mail for ${math()} pm`;
    console.log(str);
    console.log(str1);
    console.log(str2);