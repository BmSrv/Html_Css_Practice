function ToDoList (){
    this.List=new Array();
}
ToDoList.prototype.addDoing=function(doing){
    this.List.push(doing);
    this.UIupdate();
}
ToDoList.prototype.UIupdate=function(){
    const TD_Area=document.getElementById('TD_Area');
    
    for(let i =0;i<this.List.length;i++){
        
        if(this.List[i]!=undefined){
            const createEL=document.createElement('div');
            createEL.id=`doing_${i}`;
            createEL.append(this.List[i].Excu,' |   ',this.List[i].When)
            
            console.log(createEL);
            
            TD_Area.append(createEL);
            
            
                        
        }

    }
}
const TDL=new ToDoList();

function Doing(Excu,When){
    Object.defineProperties(this,{
        Excu:{
            get:function(){
                return Excu;
            },
            set:function(excu){
                this.Excu=excu;
            }
        },

        When:{
            get:function(){
                return When;
            },
            set:function(when){
                this.When=when;
            }
        }


    }) 
}

const d1=new Doing('123','456');
console.log(d1);