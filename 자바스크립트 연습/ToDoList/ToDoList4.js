const btnEl=document.getElementById('btn');
const frmEl=document.getElementById('frm');
const TD_Area=document.getElementById('TD_Area');

frmEl.addEventListener('submit',function(e){
    e.preventDefault();

    TDL.addDoing(new Doing(this.doing.value,this.date.value))
    
})


function ToDoList (){
    this.List=new Array();
}
ToDoList.prototype.addDoing=function(doing){
    this.List.push(doing);
    this.UIupdate();
}
ToDoList.prototype.UIupdate=function(){
    TD_Area.innerHTML="";
    for(let i =0;i<this.List.length;i++){
        
        if(this.List[i]!=undefined){
            const createEL=document.createElement('div');
            createEL.id=`doing_${i}`;
            createEL.append(this.List[i].Excu,' |   ',this.List[i].When)

            const createBtn=document.createElement('button')
            createBtn.id=`Remove_${i}`;
            createBtn.append('삭제');

            createEL.append(createBtn);
            
            console.log(createEL);
            
            TD_Area.append(createEL);
            
            createBtn.addEventListener('click',function(){
                const del=document.getElementById(`doing_${i}`);
                del.remove();
                delete TDL.List[`${i}`];
            })
                        
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

