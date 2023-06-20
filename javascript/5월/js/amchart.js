am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    
    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    
    var data = [];

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        for(var i in json){
            data.push({
                country : json[i].username,
                year2004 : parseInt(Math.abs(json[i].address.geo.lat)),
                year2005 : parseInt(Math.abs(json[i].address.geo.lng))
            });
        }
        xAxis.data.setAll(data);
        series0.data.setAll(data);
        series1.data.setAll(data);
      })
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 70
    });
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "country",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {
        themeTags: ["axis"],
        animationDuration: 200
      })
    }));

    xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 10
      });
    
    xRenderer.grid.template.setAll({
      location: 1,
    })

    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    
    var series0 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Income",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "year2004",
      categoryXField: "country",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        labelText: "2004: {valueY}"
      })
    }));
    
    series0.columns.template.setAll({
      width: am5.percent(80),
      tooltipY: 0,
      strokeOpacity: 0
    });
    
    
    
    var series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Income",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "year2005",
      categoryXField: "country",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        labelText: "2005: {valueY}"
      })
    }));
    
    series1.columns.template.setAll({
      width: am5.percent(50),
      tooltipY: 0,
      strokeOpacity: 0
    });
    
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    series0.appear();
    series1.appear();
    
    }); // end am5.ready()