param zoneName string

resource dnsZone 'Microsoft.Network/dnsZones@2018-05-01' = {
  name: zoneName
  location: 'global'
}
 
resource wwwCNAME 'Microsoft.Network/dnsZones/CNAME@2018-05-01' = {
  parent: dnsZone
  name: 'www'
  properties: {
    TTL: 3600
    CNAMERecord: {
      cname: 'handiman.github.io.'
    }
  }
}

resource apexA 'Microsoft.Network/dnsZones/A@2018-05-01' = {
  parent: dnsZone
  name: '@'
  properties: {
    TTL : 3600
    ARecords: [
        { ipv4Address: '185.199.108.153' }
        { ipv4Address: '185.199.109.153' }
        { ipv4Address: '185.199.110.153' }
        { ipv4Address: '185.199.111.153' }
    ]
  }
}    

resource apexAAAA 'Microsoft.Network/dnsZones/AAAA@2018-05-01' = {
  parent: dnsZone
  name: '@'
  properties: {
    TTL : 3600
    AAAARecords: [
        { ipv6Address: '2606:50c0:8000::153' }
        { ipv6Address: '2606:50c0:8001::153' }
        { ipv6Address: '2606:50c0:8002::153' }
        { ipv6Address: '2606:50c0:8003::153' }
    ]
  }
}
