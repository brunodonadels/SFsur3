var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_2 = new ol.format.GeoJSON();
var features_Departamento_2 = format_Departamento_2.readFeatures(json_Departamento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_2.addFeatures(features_Departamento_2);
var lyr_Departamento_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamento_2, 
                style: style_Departamento_2,
                interactive: true,
                title: '<img src="styles/legend/Departamento_2.png" /> Departamento'
            });
var format_PoblacinpordepartamentoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_3 = format_PoblacinpordepartamentoINDEC_3.readFeatures(json_PoblacinpordepartamentoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_3.addFeatures(features_PoblacinpordepartamentoINDEC_3);
var lyr_PoblacinpordepartamentoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_3, 
                style: style_PoblacinpordepartamentoINDEC_3,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_0.png" /> 44.750 - 70.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_1.png" /> 70.001 - 87.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_2.png" /> 87.001 - 191.025<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_3.png" /> 191.026 o más<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 25.000 - 32.000<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 32.001 - 67.500<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 67.501 - 325.000<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 325.001 o más<br />'
        });
var format_ViviendasreasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasreasruralesINDEC_5 = format_ViviendasreasruralesINDEC_5.readFeatures(json_ViviendasreasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasreasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasreasruralesINDEC_5.addFeatures(features_ViviendasreasruralesINDEC_5);
var lyr_ViviendasreasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasreasruralesINDEC_5, 
                style: style_ViviendasreasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasreasruralesINDEC_5_0.png" /> 1.500 - 3.000<br />\
    <img src="styles/legend/ViviendasreasruralesINDEC_5_1.png" /> 3.001 - 5.000<br />\
    <img src="styles/legend/ViviendasreasruralesINDEC_5_2.png" /> 5.001 - 7.000<br />\
    <img src="styles/legend/ViviendasreasruralesINDEC_5_3.png" /> 7.001 - 11.000<br />'
        });
var format_CabezasporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasporcinosMAGyP_6 = format_CabezasporcinosMAGyP_6.readFeatures(json_CabezasporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasporcinosMAGyP_6.addFeatures(features_CabezasporcinosMAGyP_6);
var lyr_CabezasporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasporcinosMAGyP_6, 
                style: style_CabezasporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_0.png" /> 10.000 - 15.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_1.png" /> 15.001 - 40.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_2.png" /> 40.001 - 70.000<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_3.png" /> 70.001 - 132.500<br />'
        });
var format_CabezasovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasovinosMAGyP_7 = format_CabezasovinosMAGyP_7.readFeatures(json_CabezasovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasovinosMAGyP_7.addFeatures(features_CabezasovinosMAGyP_7);
var lyr_CabezasovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasovinosMAGyP_7, 
                style: style_CabezasovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_0.png" /> 2.500 - 4.000<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_1.png" /> 4.001 - 6.500<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_2.png" /> 6.501 o más<br />'
        });
var format_CabezascaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezascaprinosMAGyP_8 = format_CabezascaprinosMAGyP_8.readFeatures(json_CabezascaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezascaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezascaprinosMAGyP_8.addFeatures(features_CabezascaprinosMAGyP_8);
var lyr_CabezascaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezascaprinosMAGyP_8, 
                style: style_CabezascaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_0.png" /> 150 - 450<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_1.png" /> 451 - 700<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_2.png" /> 701 - 1.500<br />'
        });
var format_CabezasbovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasbovinosMAGyP_9 = format_CabezasbovinosMAGyP_9.readFeatures(json_CabezasbovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasbovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasbovinosMAGyP_9.addFeatures(features_CabezasbovinosMAGyP_9);
var lyr_CabezasbovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasbovinosMAGyP_9, 
                style: style_CabezasbovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_0.png" /> 37.500 - 65.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_1.png" /> 65.001 - 180.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_2.png" /> 180.001 - 375.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_3.png" /> 375.001 o más<br />'
        });
var format_HectreashortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreashortalizasINDEC_10 = format_HectreashortalizasINDEC_10.readFeatures(json_HectreashortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreashortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreashortalizasINDEC_10.addFeatures(features_HectreashortalizasINDEC_10);
var lyr_HectreashortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreashortalizasINDEC_10, 
                style: style_HectreashortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreashortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreashortalizasINDEC_10_1.png" /> 1 - 200<br />\
    <img src="styles/legend/HectreashortalizasINDEC_10_2.png" /> 201 - 1.475<br />\
    <img src="styles/legend/HectreashortalizasINDEC_10_3.png" /> 1.476 o más<br />'
        });
var format_HectreasduraznerosINDEC_11 = new ol.format.GeoJSON();
var features_HectreasduraznerosINDEC_11 = format_HectreasduraznerosINDEC_11.readFeatures(json_HectreasduraznerosINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasduraznerosINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasduraznerosINDEC_11.addFeatures(features_HectreasduraznerosINDEC_11);
var lyr_HectreasduraznerosINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasduraznerosINDEC_11, 
                style: style_HectreasduraznerosINDEC_11,
                interactive: true,
    title: 'Hectáreas durazneros (INDEC)<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_11_1.png" /> 1 - 5<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_11_2.png" /> 6 - 70<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_11_3.png" /> 71 o más<br />'
        });
var format_HectreslegumbresINDEC_12 = new ol.format.GeoJSON();
var features_HectreslegumbresINDEC_12 = format_HectreslegumbresINDEC_12.readFeatures(json_HectreslegumbresINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreslegumbresINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreslegumbresINDEC_12.addFeatures(features_HectreslegumbresINDEC_12);
var lyr_HectreslegumbresINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreslegumbresINDEC_12, 
                style: style_HectreslegumbresINDEC_12,
                interactive: true,
    title: 'Hectáres legumbres (INDEC)<br />\
    <img src="styles/legend/HectreslegumbresINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreslegumbresINDEC_12_1.png" /> 1 - 100<br />\
    <img src="styles/legend/HectreslegumbresINDEC_12_2.png" /> 101 - 2.000<br />\
    <img src="styles/legend/HectreslegumbresINDEC_12_3.png" /> 2.001 - 7.600<br />'
        });
var format_HectreasarndanosINDEC_13 = new ol.format.GeoJSON();
var features_HectreasarndanosINDEC_13 = format_HectreasarndanosINDEC_13.readFeatures(json_HectreasarndanosINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasarndanosINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasarndanosINDEC_13.addFeatures(features_HectreasarndanosINDEC_13);
var lyr_HectreasarndanosINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasarndanosINDEC_13, 
                style: style_HectreasarndanosINDEC_13,
                interactive: true,
    title: 'Hectáreas arándanos (INDEC)<br />\
    <img src="styles/legend/HectreasarndanosINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasarndanosINDEC_13_1.png" /> 0,1 - 10<br />\
    <img src="styles/legend/HectreasarndanosINDEC_13_2.png" /> 11 - 50<br />'
        });
var format_HectreasmazMAGyP_14 = new ol.format.GeoJSON();
var features_HectreasmazMAGyP_14 = format_HectreasmazMAGyP_14.readFeatures(json_HectreasmazMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasmazMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasmazMAGyP_14.addFeatures(features_HectreasmazMAGyP_14);
var lyr_HectreasmazMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasmazMAGyP_14, 
                style: style_HectreasmazMAGyP_14,
                interactive: true,
    title: 'Hectáreas maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasmazMAGyP_14_0.png" /> 17.500 - 25.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_14_1.png" /> 25.001 - 72.500<br />\
    <img src="styles/legend/HectreasmazMAGyP_14_2.png" /> 72.501 - 120.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_14_3.png" /> 120.001 o más<br />'
        });
var format_HectreastrigoMAGyP_15 = new ol.format.GeoJSON();
var features_HectreastrigoMAGyP_15 = format_HectreastrigoMAGyP_15.readFeatures(json_HectreastrigoMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreastrigoMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreastrigoMAGyP_15.addFeatures(features_HectreastrigoMAGyP_15);
var lyr_HectreastrigoMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreastrigoMAGyP_15, 
                style: style_HectreastrigoMAGyP_15,
                interactive: true,
    title: 'Hectáreas trigo (MAGyP)<br />\
    <img src="styles/legend/HectreastrigoMAGyP_15_0.png" /> 25.000 - 45.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_15_1.png" /> 45.001 - 62.500<br />\
    <img src="styles/legend/HectreastrigoMAGyP_15_2.png" /> 62.501 - 120.000<br />\
    <img src="styles/legend/HectreastrigoMAGyP_15_3.png" /> 120.001 o más<br />'
        });
var format_HectreasgirasolMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasgirasolMAGyP_16 = format_HectreasgirasolMAGyP_16.readFeatures(json_HectreasgirasolMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasgirasolMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasgirasolMAGyP_16.addFeatures(features_HectreasgirasolMAGyP_16);
var lyr_HectreasgirasolMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasgirasolMAGyP_16, 
                style: style_HectreasgirasolMAGyP_16,
                interactive: true,
    title: 'Hectáreas girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_16_1.png" /> 1 - 2.500<br />\
    <img src="styles/legend/HectreasgirasolMAGyP_16_2.png" /> 2.501 o más<br />'
        });
var format_HectreassojaMAGyP_17 = new ol.format.GeoJSON();
var features_HectreassojaMAGyP_17 = format_HectreassojaMAGyP_17.readFeatures(json_HectreassojaMAGyP_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassojaMAGyP_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassojaMAGyP_17.addFeatures(features_HectreassojaMAGyP_17);
var lyr_HectreassojaMAGyP_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassojaMAGyP_17, 
                style: style_HectreassojaMAGyP_17,
                interactive: true,
    title: 'Hectáreas soja (MAGyP)<br />\
    <img src="styles/legend/HectreassojaMAGyP_17_0.png" /> 100.000 - 175.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_17_1.png" /> 175.001 - 300.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_17_2.png" /> 300.001 o más<br />'
        });
var format_Capacitaciones2020_18 = new ol.format.GeoJSON();
var features_Capacitaciones2020_18 = format_Capacitaciones2020_18.readFeatures(json_Capacitaciones2020_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2020_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2020_18.addFeatures(features_Capacitaciones2020_18);
var lyr_Capacitaciones2020_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2020_18, 
                style: style_Capacitaciones2020_18,
                interactive: true,
    title: 'Capacitaciones 2020<br />\
    <img src="styles/legend/Capacitaciones2020_18_0.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2020_18_1.png" /> Tecnica<br />'
        });
var format_Capacitaciones2019_19 = new ol.format.GeoJSON();
var features_Capacitaciones2019_19 = format_Capacitaciones2019_19.readFeatures(json_Capacitaciones2019_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019_19.addFeatures(features_Capacitaciones2019_19);
var lyr_Capacitaciones2019_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019_19, 
                style: style_Capacitaciones2019_19,
                interactive: true,
    title: 'Capacitaciones 2019<br />\
    <img src="styles/legend/Capacitaciones2019_19_0.png" /> Tecnica<br />\
    <img src="styles/legend/Capacitaciones2019_19_1.png" /> Concientizacion<br />\
    <img src="styles/legend/Capacitaciones2019_19_2.png" /> Difusion<br />'
        });
var format_Capacitaciones2018_20 = new ol.format.GeoJSON();
var features_Capacitaciones2018_20 = format_Capacitaciones2018_20.readFeatures(json_Capacitaciones2018_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018_20.addFeatures(features_Capacitaciones2018_20);
var lyr_Capacitaciones2018_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018_20, 
                style: style_Capacitaciones2018_20,
                interactive: true,
    title: 'Capacitaciones 2018<br />\
    <img src="styles/legend/Capacitaciones2018_20_0.png" /> Concientizacion<br />\
    <img src="styles/legend/Capacitaciones2018_20_1.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2018_20_2.png" /> Tecnica<br />'
        });
var format_Capacitaciones2017concientizacin_21 = new ol.format.GeoJSON();
var features_Capacitaciones2017concientizacin_21 = format_Capacitaciones2017concientizacin_21.readFeatures(json_Capacitaciones2017concientizacin_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017concientizacin_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017concientizacin_21.addFeatures(features_Capacitaciones2017concientizacin_21);
var lyr_Capacitaciones2017concientizacin_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017concientizacin_21, 
                style: style_Capacitaciones2017concientizacin_21,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2017concientizacin_21.png" /> Capacitaciones 2017 (concientización)'
            });
var format_Localidades_22 = new ol.format.GeoJSON();
var features_Localidades_22 = format_Localidades_22.readFeatures(json_Localidades_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_22.addFeatures(features_Localidades_22);
var lyr_Localidades_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_22, 
                style: style_Localidades_22,
                interactive: true,
                title: '<img src="styles/legend/Localidades_22.png" /> Localidades'
            });
var format_BER_23 = new ol.format.GeoJSON();
var features_BER_23 = format_BER_23.readFeatures(json_BER_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_23.addFeatures(features_BER_23);
var lyr_BER_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_23, 
                style: style_BER_23,
                interactive: true,
                title: '<img src="styles/legend/BER_23.png" /> BER'
            });
var format_BER_24 = new ol.format.GeoJSON();
var features_BER_24 = format_BER_24.readFeatures(json_BER_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_24.addFeatures(features_BER_24);
var lyr_BER_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_24, 
                style: style_BER_24,
                interactive: true,
                title: '<img src="styles/legend/BER_24.png" /> BER'
            });
var format_CAIRVenadoTuerto_25 = new ol.format.GeoJSON();
var features_CAIRVenadoTuerto_25 = format_CAIRVenadoTuerto_25.readFeatures(json_CAIRVenadoTuerto_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIRVenadoTuerto_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIRVenadoTuerto_25.addFeatures(features_CAIRVenadoTuerto_25);
var lyr_CAIRVenadoTuerto_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIRVenadoTuerto_25, 
                style: style_CAIRVenadoTuerto_25,
                interactive: true,
                title: '<img src="styles/legend/CAIRVenadoTuerto_25.png" /> CAIR Venado Tuerto'
            });
var format_DelegacinRosario_26 = new ol.format.GeoJSON();
var features_DelegacinRosario_26 = format_DelegacinRosario_26.readFeatures(json_DelegacinRosario_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinRosario_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinRosario_26.addFeatures(features_DelegacinRosario_26);
var lyr_DelegacinRosario_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinRosario_26, 
                style: style_DelegacinRosario_26,
                interactive: true,
                title: '<img src="styles/legend/DelegacinRosario_26.png" /> Delegación Rosario'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamento_2.setVisible(true);lyr_PoblacinpordepartamentoINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_ViviendasreasruralesINDEC_5.setVisible(true);lyr_CabezasporcinosMAGyP_6.setVisible(true);lyr_CabezasovinosMAGyP_7.setVisible(true);lyr_CabezascaprinosMAGyP_8.setVisible(true);lyr_CabezasbovinosMAGyP_9.setVisible(true);lyr_HectreashortalizasINDEC_10.setVisible(true);lyr_HectreasduraznerosINDEC_11.setVisible(true);lyr_HectreslegumbresINDEC_12.setVisible(true);lyr_HectreasarndanosINDEC_13.setVisible(true);lyr_HectreasmazMAGyP_14.setVisible(true);lyr_HectreastrigoMAGyP_15.setVisible(true);lyr_HectreasgirasolMAGyP_16.setVisible(true);lyr_HectreassojaMAGyP_17.setVisible(true);lyr_Capacitaciones2020_18.setVisible(true);lyr_Capacitaciones2019_19.setVisible(true);lyr_Capacitaciones2018_20.setVisible(true);lyr_Capacitaciones2017concientizacin_21.setVisible(true);lyr_Localidades_22.setVisible(true);lyr_BER_23.setVisible(true);lyr_BER_24.setVisible(true);lyr_CAIRVenadoTuerto_25.setVisible(true);lyr_DelegacinRosario_26.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamento_2,lyr_PoblacinpordepartamentoINDEC_3,lyr_PEAINDEC_4,lyr_ViviendasreasruralesINDEC_5,lyr_CabezasporcinosMAGyP_6,lyr_CabezasovinosMAGyP_7,lyr_CabezascaprinosMAGyP_8,lyr_CabezasbovinosMAGyP_9,lyr_HectreashortalizasINDEC_10,lyr_HectreasduraznerosINDEC_11,lyr_HectreslegumbresINDEC_12,lyr_HectreasarndanosINDEC_13,lyr_HectreasmazMAGyP_14,lyr_HectreastrigoMAGyP_15,lyr_HectreasgirasolMAGyP_16,lyr_HectreassojaMAGyP_17,lyr_Capacitaciones2020_18,lyr_Capacitaciones2019_19,lyr_Capacitaciones2018_20,lyr_Capacitaciones2017concientizacin_21,lyr_Localidades_22,lyr_BER_23,lyr_BER_24,lyr_CAIRVenadoTuerto_25,lyr_DelegacinRosario_26];
lyr_Departamento_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasreasruralesINDEC_5.set('fieldAliases', {'Viv Rur': 'Viv Rur', });
lyr_CabezasporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezascaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasbovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreashortalizasINDEC_10.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasduraznerosINDEC_11.set('fieldAliases', {'Duraznero': 'Duraznero', });
lyr_HectreslegumbresINDEC_12.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasarndanosINDEC_13.set('fieldAliases', {'Arandano': 'Arandano', });
lyr_HectreasmazMAGyP_14.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreastrigoMAGyP_15.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasgirasolMAGyP_16.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreassojaMAGyP_17.set('fieldAliases', {'Soja': 'Soja', });
lyr_Capacitaciones2020_18.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2019_19.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018_20.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa': 'Tipo Capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2017concientizacin_21.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Localidades_22.set('fieldAliases', {'Localidad': 'Localidad', 'Personas': 'Personas', });
lyr_BER_23.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'admin': 'admin', });
lyr_BER_24.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'admin': 'admin', });
lyr_CAIRVenadoTuerto_25.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_DelegacinRosario_26.set('fieldAliases', {'Delegacion': 'Delegacion', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', });
lyr_Departamento_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasreasruralesINDEC_5.set('fieldImages', {'Viv Rur': 'TextEdit', });
lyr_CabezasporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezascaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasbovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreashortalizasINDEC_10.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasduraznerosINDEC_11.set('fieldImages', {'Duraznero': 'TextEdit', });
lyr_HectreslegumbresINDEC_12.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasarndanosINDEC_13.set('fieldImages', {'Arandano': 'TextEdit', });
lyr_HectreasmazMAGyP_14.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreastrigoMAGyP_15.set('fieldImages', {'Trigo': 'TextEdit', });
lyr_HectreasgirasolMAGyP_16.set('fieldImages', {'Girasol': 'TextEdit', });
lyr_HectreassojaMAGyP_17.set('fieldImages', {'Soja': 'TextEdit', });
lyr_Capacitaciones2020_18.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2019_19.set('fieldImages', {'Localidad': '', 'Tipo capa': '', 'Tematica': '', 'Fechas': '', 'Asistentes': '', });
lyr_Capacitaciones2018_20.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2017concientizacin_21.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Localidades_22.set('fieldImages', {'Localidad': 'TextEdit', 'Personas': 'TextEdit', });
lyr_BER_23.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'admin': 'TextEdit', });
lyr_BER_24.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'admin': 'TextEdit', });
lyr_CAIRVenadoTuerto_25.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_DelegacinRosario_26.set('fieldImages', {'Delegacion': '', 'Direccion': '', 'Prest 2016': '', 'Prest 2017': '', 'Prest 2018': '', 'Prest 2019': '', 'Prest 2020': '', });
lyr_Departamento_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasreasruralesINDEC_5.set('fieldLabels', {'Viv Rur': 'inline label', });
lyr_CabezasporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezascaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasbovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreashortalizasINDEC_10.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasduraznerosINDEC_11.set('fieldLabels', {'Duraznero': 'inline label', });
lyr_HectreslegumbresINDEC_12.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasarndanosINDEC_13.set('fieldLabels', {'Arandano': 'inline label', });
lyr_HectreasmazMAGyP_14.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreastrigoMAGyP_15.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasgirasolMAGyP_16.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreassojaMAGyP_17.set('fieldLabels', {'Soja': 'inline label', });
lyr_Capacitaciones2020_18.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2019_19.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018_20.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2017concientizacin_21.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Localidades_22.set('fieldLabels', {'Localidad': 'inline label', 'Personas': 'inline label', });
lyr_BER_23.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'admin': 'inline label', });
lyr_BER_24.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'admin': 'inline label', });
lyr_CAIRVenadoTuerto_25.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_DelegacinRosario_26.set('fieldLabels', {'Delegacion': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', });
lyr_DelegacinRosario_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});