<?php

header('Content-Type: application/json');
header("Cache-Control: max-age=600");

$folder = dirname(__FILE__);

if (file_exists($folder . '/maskdata_combined.json')) {
    $timestamp = filemtime($folder . '/maskdata_combined.json');
    if (time() - $timestamp <= 600) {
        echo file_get_contents($folder . '/maskdata_combined.json');
        return;
    }
}

$url = 'https://data.nhi.gov.tw/resource/mask/maskdata.csv';
// $url = 'https://mask-data-farmer.herokuapp.com/restful/getMasks';

$ch = curl_init();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_REFERER, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);

curl_close($ch);

$results = explode("\n", $result);
unset($result);

$drugstores = file_get_contents('./drugstores.json');
$drugstores = json_decode($drugstores, true);

$results = array_reduce(
    $results,
    function ($carry, $item) {
        $item = explode(',', $item);
        $carry[(string) $item[0]] = $item;

        return $carry;
    },
    []
);

foreach ($drugstores['features'] as $key => $store) {
    $drugstores['features'][$key]['properties']['total'] = 0;
    if (isset($results[(string) $store['properties']['id']])) {
        $data = $results[(string) $store['properties']['id']];

        $drugstores['features'][$key]['properties']['mask_adult'] = (int) $data[4];
        $drugstores['features'][$key]['properties']['mask_child'] = (int) $data[5];
        $drugstores['features'][$key]['properties']['total'] = (int) $data[4] + (int) $data[5];
        $drugstores['features'][$key]['properties']['updated'] = (string) $data[6];
    }
}

$drugstores = json_encode($drugstores, JSON_UNESCAPED_UNICODE);

file_put_contents($folder . '/maskdata_combined.json', $drugstores);
system('touch ' . $folder . '/maskdata_combined.json');

echo $drugstores;
