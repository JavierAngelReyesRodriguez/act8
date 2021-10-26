const app=new Vue({
  el:"#clases",
  data:{
      nombre:'',
      cantidad:0,
      precio:0,
      productos:[/*
        {nombreP: "Suplementos Vitamina B",
        cantidadP: "50",
        precioP:150},
        {nombreP: "Desodorante",
        cantidadP: "30",
        precioP:50},*/
      ],
      contador:0,
      subtotal:0,
      iva:0,
      total:0,
  },  
  methods:{
    agregar: function(){
      if(this.nombre && this.cantidad && this.precio){
        this.productos.push({nombreP:this.nombre, cantidadP:this.cantidad, precioP:this.precio});
      parseInt(this.cantidad,10);
      parseInt(this.contador,10);
      this.contador=parseInt(this.contador)+parseInt(this.cantidad);
      this.subtotal=this.cantidad*this.precio;
      this.nombre='';
      this.cantidad=0;
      this.precio=0;
      this.iva=this.iva+this.subtotal;
      this.total=this.iva+this.iva*0.16;
      }
      },
      mas :function(){
        this.contador++;
        this.cantidadP++;
      },
      menos:function(){
        this.contador--;
        this.cantidadP--;
    }
  },
  });