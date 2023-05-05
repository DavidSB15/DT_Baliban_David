function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) 
            symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1)
            symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) 
            symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) 
            symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function nonreturntozeromark(bits)
{
    var result = [];
    var flag=0;
    for (var i = 0; i < bits.length; i++) 
    {
        let symbol = '----';
        if (parseInt(bits[i].value) == 1) 
        {
            if(flag==0) //daca e jos sau sus. aici e jos
            {
                flag = 1;
                symbol = '∣▔▔';
            }
            else if(flag==1) //daca e jos sau sus. aici e sus
            {
                flag = 0;
                symbol = '∣▁▁';
            }
        } 
        else if(parseInt(bits[i].value) == 0) 
        {
            if(flag==1) //daca e jos sau sus. aici e jos
                symbol = '▔▔';             
            else 
            {
                if(flag==0) //daca e jos sau sus. aici e sus
                    symbol = '▁▁∣';                
            }
        } 
        result.push(symbol);
    }
    return result;
}

function nonreturntozerospace(bits)
{
    var result = [];
    var flag=0;
    for (var i = 0; i < bits.length; i++) 
    {
        let symbol = '----';
        if (parseInt(bits[i].value) == 0) 
        {
            if(flag==0) //daca e jos sau sus. aici e jos
            {
                flag = 1;
                symbol = '∣▔▔';
            }
            else if(flag==1) //daca e jos sau sus. aici e sus
            {
                flag = 0;
                symbol = '∣▁▁';
            }
        } 
        else if(parseInt(bits[i].value) == 1) 
        {
            if(flag==1) //daca e jos sau sus. aici e jos
                symbol = '▔▔';             
            else 
            {
                if(flag==0) //daca e jos sau sus. aici e sus
                    symbol = '▁▁∣';                
            }
        } 
        result.push(symbol);
    }
    return result;
}

function returntozero(bits)
{
    var result = [];
    var flag=0;
    for (var i = 0; i < bits.length; i++) 
    {
        let symbol = '----';
        if (parseInt(bits[i].value) == 1) 
            symbol = '∣▔∣▁';
        else if (parseInt(bits[i].value) == 0)
            symbol = '▁▁';
        result.push(symbol);
    }return result;
}

function biphaselevel1(bits)
{
    var result = [];
    var flag=0;
    for (var i = 0; i < bits.length; i++) 
    {
        let symbol = '----';
        if (parseInt(bits[i].value) == 0) 
            symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1) 
            symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i>0 && parseInt(bits[i-1].value) == 0) 
            symbol = '∣∣▔';
        if ((parseInt(bits[i].value) == 1 && i>0 && parseInt(bits[i - 1].value) == 1) || ((bits[i].value) == 1 && i==0))
            symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}