angular.module('webui.services.settings', [])
.value('$fileSettings', {
  // {{{ settings (for files)
  "all-proxy": {
    tr:'总代理',
    val: '',
    desc: '对所有的连接使用代理。如果想取消连接请留空。 可以使用\'http-proxy\',\'https-proxy\'和\'ftp-proxy\'. 格式为：[http://][USER:PASSWORD@]HOST[:PORT].'
  },

  "all-proxy-passwd": {
    tr:'总代理密码',
    val: '',
    desc: "设置总代理密码。"
  },

  "all-proxy-user": {
    tr:'总代理用户名',
    val: '',
    desc: "设置总代理用户名。"
  },

  "allow-overwrite": {
    tr:'允许重新下载',
    val: false,
    options: ["true", "false"],
    desc: "当下载控制文件不存在的时候允许重新下载。默认：否"
  },

  "allow-piece-length-change": {
    tr:'允许块长度改变',
    val: false,
    options: ["true", "false"],
    desc: "当块长度与控制文件不同时，如果不允许则停止下载。如果允许，虽然会继续下载，可能会丢失数据。默认：否"
  },

  "always-resume": {
    tr:'总是恢复下载',
    val: true,
    options: ["true", "false"],
    desc: "总是恢复下载。 If true is given, aria2 always tries to resume download and if resume is not possible, aborts download. If false is given, when all given URIs do not support resume or aria2 encounters N URIs which does not support resume (N is the value specified using --max-resume-failure-tries option), aria2 downloads file from scratch. See --max-resume-failure-tries option. 默认：是"
  },

  "async-dns": {
    tr:'异步DNS',
    val: true,
    options: ["true", "false"],
    desc: "启用异步DNS. 默认：是"
  },

  "auto-file-renaming": {
    tr:'自动文件重命名',
    val: true,
    options: ["true", "false"],
    desc: "当下载文件名重复的时候，自动重命名。仅支持\'HTTP(S)\'和\'FTP\'。 新的文件名会追加一个\'.\'以及数字(1..9999)。 默认：是"
  },

  "bt-enable-lpd": {
    tr:'bt-enable-lpd',
    desc: "Enable Local Peer Discovery. If a private flag is set in a torrent, aria2 doesn't use this feature for that download even if true is given. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "bt-exclude-tracker": {
    tr:'bt-exclude-tracker',
    val: '',
    desc: "Comma separated list of BitTorrent tracker's announce URI to remove. You can use special value * which matches all URIs, thus removes all announce URIs. When specifying * in shell command-line, don't forget to escape or quote it. See also --bt-tracker option."
  },

  "bt-external-ip": {
    tr:'bt-external-ip',
    val: '',
    desc: "Specify the external IP address to report to a BitTorrent tracker. Although this function is named external, it can accept any kind of IP addresses. IPADDRESS must be a numeric IP address."

  },

  "bt-hash-check-seed": {
    tr:'bt-hash-check-seed',
    desc: "If true is given, after hash check using --check-integrity option and file is complete, continue to seed file. If you want to check file and download it only when it is damaged or incomplete, set this option to false. This option has effect only on BitTorrent download. 默认：是",
    val: true,
    options: ["true", "false"],
  },

  "bt-max-open-files": {
    tr:'bt-max-open-files',
    val: 100,
    desc: "Specify maximum number of files to open in each BitTorrent download. 默认： 100"
  },

  "bt-max-peers": {
    tr:'bt-max-peers',
    val: 55,
    desc: "Specify the maximum number of peers per torrent. 0 means unlimited. See also bt-request-peer-speed-limit option. 默认： 55"
  },

  "bt-metadata-only": {
    tr:'bt-metadata-only',
    desc: "Download metadata only. The file(s) described in metadata will not be downloaded. This option has effect only when BitTorrent Magnet URI is used. See also --bt-save-metadata option. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "bt-min-crypto-level": {
    tr:'bt-min-crypto-level',
    desc: "Set minimum level of encryption method. If several encryption methods are provided by a peer, aria2 chooses the lowest one which satisfies the given level. 默认： plain",
    val: 'plain',
    options: ["plain", "arc4"]
  },

  "bt-prioritize-piece": {
    tr:'bt-prioritize-piece',
    val: '',
    desc: "Try to download first and last pieces of each file first. This is useful for previewing files. The argument can contain 2 keywords: head and tail. To include both keywords, they must be separated by comma. These keywords can take one parameter, SIZE. For example, if head=<SIZE> is specified, pieces in the range of first SIZE bytes of each file get higher priority. tail=<SIZE> means the range of last SIZE bytes of each file. SIZE can include K or M (1K = 1024, 1M = 1024K). If SIZE is omitted, SIZE=1M is used."
  },

  "bt-request-peer-speed-limit": {
    tr:'bt-request-peer-speed-limit',
    val: '50K',
    desc: "If the whole download speed of every torrent is lower than SPEED, aria2 temporarily increases the number of peers to try for more download speed. Configuring this option with your preferred download speed can increase your download speed in some cases. You can append K or M (1K = 1024, 1M = 1024K). 默认： 50K"
  },

  "bt-require-crypto": {
    tr:'bt-require-crypto',
    desc: "If true is given, aria2 doesn't accept and establish connection with legacy BitTorrent handshake(19BitTorrent protocol). Thus aria2 always uses Obfuscation handshake. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "bt-save-metadata": {
    tr:'bt-save-metadata',
    desc: "Save metadata as .torrent file. This option has effect only when BitTorrent Magnet URI is used. The filename is hex encoded info hash with suffix .torrent. The directory to be saved is the same directory where download file is saved. If the same file already exists, metadata is not saved. See also --bt-metadata-only option. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "bt-seed-unverified": {
    tr:'bt-seed-unverified',
    desc: "Seed previously downloaded files without verifying piece hashes. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "bt-stop-timeout": {
    tr:'bt-stop-timeout',
    val: 0,
    desc: "Stop BitTorrent download if download speed is 0 in consecutive SEC seconds. If 0 is given, this feature is disabled. 默认： 0"
  },

  "bt-tracker": {
    tr:'bt-tracker',
    val: '',
    desc: "Comma separated list of additional BitTorrent tracker's announce URI. These URIs are not affected by --bt-exclude-tracker option because they are added after URIs in --bt-exclude-tracker option are removed."
  },

  "bt-tracker-connect-timeout": {
    tr:'bt-tracker-connect-timeout',
    val: 60,
    desc: "Set the connect timeout in seconds to establish connection to tracker. After the connection is established, this option makes no effect and --bt-tracker-timeout option is used instead. 默认： 60"
  },

  "bt-tracker-interval": {
    tr:'bt-tracker-interval',
    val: 0,
    desc: "Set the interval in seconds between tracker requests. This completely overrides interval value and aria2 just uses this value and ignores the min interval and interval value in the response of tracker. If 0 is set, aria2 determines interval based on the response of tracker and the download progress. 默认： 0"
  },

  "bt-tracker-timeout": {
    tr:'bt-tracker-timeout',
    val: 60,
    desc: "Set timeout in seconds. 默认： 60"
  },

  "bt-remove-unselected-file": {
    tr:'bt-remove-unselected-file',
    desc: "Removes the unselected files when download is completed in BitTorrent. To select files, use --select-file option. If it is not used, all files are assumed to be selected. Please use this option with care because it will actually remove files from your disk. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "check-integrity": {
    tr:'check-integrity',
    desc: "Check file integrity by validating piece hashes or a hash of entire file. This option has effect only in BitTorrent, Metalink downloads with checksums or HTTP(S)/FTP downloads with --checksum option. If piece hashes are provided, this option can detect damaged portions of a file and re-download them. If a hash of entire file is provided, hash check is only done when file has been already download. This is determined by file length. If hash check fails, file is re-downloaded from scratch. If both piece hashes and a hash of entire file are provided, only piece hashes are used. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "conditional-get": {
    tr:'conditional-get',
    desc: "Download file only when the local file is older than remote file. This function only works with HTTP(S) downloads only. It does not work if file size is specified in Metalink. It also ignores Content-Disposition header. If a control file exists, this option will be ignored. This function uses If-Modified-Since header to get only newer file conditionally. When getting modification time of local file, it uses user supplied filename(see --out option) or filename part in URI if --out is not specified. To overwrite existing file, --allow-overwrite is required. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "connect-timeout": {
    tr:'连接超时',
    val: 60,
    desc: "以秒为单位设置超时时间。如果Aria2启用\'--timeout\'，则此选项无效。 默认: 60"
  },

  "continue": {
    tr:'续传',
    desc: "断点续传。当前次选项仅支持\'HTTP(S)/FTP\'下载。",
    val: true,
    options: ["true", "false"],
  },

  "dir": {
    tr:'下载目录',
    val: '',
    desc: "文件下载到这个目录。"
  },

  "dry-run": {
    tr:'检测',
    desc: "当开启检测是，Aria2仅仅检测远程文件是否存在，并不会下载数据。次选项仅支持\'HTTP(S)/FTP\'下载。 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "enable-async-dns6": {
    tr:'启用异步DNS6',
    desc: "启用IPv6的域名解析。 如果Aria2启用\'--async-dns=false\'，则此选项无效。 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "enable-http-keep-alive": {
    tr:'启用HTTP保持连接',
    desc: "启用 HTTP/1.1 保持连接. 默认：是",
    val: true,
    options: ["true", "false"],
  },

  "enable-http-pipelining": {
    tr:'启用HTTP管道',
    desc: "启用 HTTP/1.1 管道. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "enable-peer-exchange": {
    tr:'启用点对点',
    desc: "Enable Peer Exchange extension. If a private flag is set in a torrent, this feature is disabled for that download even if true is given. 默认：是",
    val: true,
    options: ["true", "false"],
  },

  "file-allocation": {
    tr:'文件预分配',
    desc: "指定文件预分配模式，能有效降低磁盘碎片。\'none\'不启用。预分配所需时间: none < falloc ? trunc < prealloc 。falloc和trunc则需要文件系统和内核支持，NTFS建议使用falloc, EXT3/4建议trunc, MAC 下为none。默认: prealloc",
    val: undefined,
    options: ["none", "prealloc", "falloc", "trunc"]
  },

  "follow-metalink": {
    tr:'follow-metalink',
    desc: "If true or mem is specified, when a file whose suffix is .meta4 or .metalink or content type of application/metalink4+xml or application/metalink+xml is downloaded, aria2 parses it as a metalink file and downloads files mentioned in it. If mem is specified, a metalink file is not written to the disk, but is just kept in memory. If false is specified, the action mentioned above is not taken. 默认：是",
    val: true,
    options: ["true", "false"],
  },

  "follow-torrent": {
    tr:'follow-torrent',
    desc: "If true or mem is specified, when a file whose suffix is .torrent or content type is application/x-bittorrent is downloaded, aria2 parses it as a torrent file and downloads files mentioned in it. If mem is specified, a torrent file is not written to the disk, but is just kept in memory. If false is specified, the action mentioned above is not taken. 默认：是",
    val: true,
    options: ["true", "false"],
  },

  "ftp-passwd": {
    tr:'FTP密码',
    val: 'ARIA2USER@',
    desc: "设置FTP密码。 此选项影响所有的任务。 如果在URL中有用户名而没有密码，则Aria2会在\'.netrc\'中查找。如果没有找到就会使用这个密码。 默认： ARIA2USER@"
  },

  "ftp-pasv": {
    tr:'ftp-pasv',
    desc: "Use the passive mode in FTP. If false is given, the active mode will be used. 默认：是",
    val: true,
    options: ["true", "false"],
  },

  "ftp-proxy": {
    tr:'FTP代理',
    val: '',
    desc: 'FTP使用的代理服务器。取消代理请留空。这会影响所有的FTP任务。格式为：\'[http://][USER:PASSWORD@]HOST[:PORT]\'。'
  },

  "ftp-proxy-passwd": {
    tr:'FTP代理密码',
    val: '',
    desc: "设置FTP代理密码。"
  },

  "ftp-proxy-user": {
    tr:'FTP代理用户名',
    val: '',
    desc: "设置FTP代理用户名。"
  },

  "ftp-reuse-connection": {
    tr:'FTP连接重用',
    desc: "FTP连接重用。 默认：是。",
    val: true,
    options: ["true", "false"],
  },

  "ftp-type": {
    tr:'FTP传输类型',
    desc: "设置FTP传输类型。 默认： binary。",
    val: 'binary',
    options: ["binary", "ascii"]
  },

  "ftp-user": {
    tr:'FTP用户名',
    val: 'anonymous',
    desc: "设置FTP用户名。这会影响所有的FTP任务。 默认： anonymous"
  },

  "header": {
    tr:'请求头',
    val: '',
    desc: "添加HTTP请求头。"
  },

  "http-accept-gzip": {
    tr:'http-accept-gzip',
    desc: "Send Accept: deflate, gzip request header and inflate response if remote server responds with Content-Encoding: gzip or Content-Encoding: deflate. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "http-auth-challenge": {
    tr:'http-auth-challenge',
    desc: "Send HTTP authorization header only when it is requested by the server. If false is set, then authorization header is always sent to the server. There is an exception: if username and password are embedded in URI, authorization header is always sent to the server regardless of this option. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "http-no-cache": {
    tr:'http-no-cache',
    desc: "Send Cache-Control: no-cache and Pragma: no-cache header to avoid cached content. If false is given, these headers are not sent and you can add Cache-Control header with a directive you like using --header option. 默认：是",
    val: true,
    options: ["true", "false"],
  },

  "http-user": {
    tr:'http-user',
    val: '',
    desc: "Set HTTP username.",
  },

  "http-passwd": {
    tr:'http-passwd',
    val: '',
    desc: "Set HTTP password.",
  },

  "http-proxy": {
    tr:'http-proxy',
    val: '',
    desc: 'Use this proxy server for HTTP. To erase previously defined proxy, use "". See also --all-proxy option. This affects all URIs. The format of PROXY is [http://][USER:PASSWORD@]HOST[:PORT].'
  },

  "http-proxy-passwd": {
    tr:'http-proxy-passwd',
    val: '',
    desc: "Set password for --http-proxy option."
  },

  "http-proxy-user": {
    tr:'http-proxy-user',
    val: '',
    desc: "Set user for --http-proxy option."
  },

  "index-out": {
    tr:'index-out',
    val: undefined,
    desc: "Set file path for file with index=INDEX. You can find the file index using the --show-files option. PATH is a relative path to the path specified in --dir option. You can use this option multiple times. Using this option, you can specify the output filenames of BitTorrent downloads."
  },

  "lowest-speed-limit": {
    tr:'lowest-speed-limit',
    val: '0',
    desc: "Close connection if download speed is lower than or equal to this value(bytes per sec). 0 means aria2 does not have a lowest speed limit. You can append K or M (1K = 1024, 1M = 1024K). This option does not affect BitTorrent downloads. 默认： 0"
  },

  "max-connection-per-server": {
    tr:'max-connection-per-server',
    val: 1,
    desc: "The maximum number of connections to one server for each download. 默认： 1"
  },

  "max-download-limit": {
    tr:'max-download-limit',
    val: '0',
    desc: "Set max download speed per each download in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the overall download speed, use --max-overall-download-limit option. 默认： 0"
  },

  "max-file-not-found": {
    tr:'max-file-not-found',
    val: 0,
    desc: 'If aria2 receives "file not found" status from the remote HTTP/FTP servers NUM times without getting a single byte, then force the download to fail. Specify 0 to disable this option. This options is effective only when using HTTP/FTP servers. 默认： 0'
  },

  "max-resume-failure-tries": {
    tr:'max-resume-failure-tries',
    val: 0,
    desc: "When used with --always-resume=false, aria2 downloads file from scratch when aria2 detects N number of URIs that does not support resume. If N is 0, aria2 downloads file from scratch when all given URIs do not support resume. See --always-resume option. 默认： 0"
  },

  "max-tries": {
    tr:'max-tries',
    val: 0,
    desc: "Set number of tries. 0 means unlimited. See also --retry-wait. 默认： 5"
  },

  "max-upload-limit": {
    tr:'max-upload-limit',
    val: '0',
    desc: "Set max upload speed per each torrent in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the overall upload speed, use --max-overall-upload-limit option. 默认： 0"
  },

  "metalink-enable-unique-protocol": {
    tr:'metalink-enable-unique-protocol',
    desc: "If true is given and several protocols are available for a mirror in a metalink file, aria2 uses one of them. Use --metalink-preferred-protocol option to specify the preference of protocol. 默认：是",
    val: true,
    options: ["true", "false"],
  },

  "metalink-language": {
    tr:'metalink-language',
    val: '',
    desc: "The language of the file to download."
  },

  "metalink-location": {
    tr:'metalink-location',
    val: '',
    desc: "The location of the preferred server. A comma-delimited list of locations is acceptable, for example, jp,us."
  },

  "metalink-os": {
    tr:'metalink-os',
    val: '',
    desc: "The operating system of the file to download."
  },

  "metalink-version": {
    tr:'metalink-version',
    val: '',
    desc: "The version of the file to download."
  },

  "min-split-size": {
    tr:'min-split-size',
    val: '20M',
    desc: "aria2 does not split less than 2*SIZE byte range. For example, let's consider downloading 20MiB file. If SIZE is 10M, aria2 can split file into 2 range [0-10MiB) and [10MiB-20MiB) and download it using 2 sources(if --split >= 2, of course). If SIZE is 15M, since 2*15M > 20MiB, aria2 does not split file and download it using 1 source. You can append K or M (1K = 1024, 1M = 1024K). Possible Values: 1M -1024M 默认： 20M"
  },

  "no-file-allocation-limit": {
    tr:'no-file-allocation-limit',
    val: '5M',
    desc: "No file allocation is made for files whose size is smaller than SIZE. You can append K or M (1K = 1024, 1M = 1024K). 默认： 5M"
  },

  "no-netrc": {
    tr:'no-netrc',
    desc: "Disables netrc support. netrc support is enabled by default.Note netrc file is only read at the startup if --no-netrc is false. So if --no-netrc is true at the startup, no netrc is available throughout the session. You cannot get netrc enabled even if you change this setting.",
    val: true,
    options: ["true", "false"],
  },

  "no-proxy": {
    tr:'no-proxy',
    val: '',
    desc: "Specify comma separated hostnames, domains and network address with or without CIDR block where proxy should not be used."
  },

  "out": {
    tr:'out',
    val: '',
    desc: "The file name of the downloaded file. When --force-sequential option is used, this option is ignored."
  },

  "parameterized-uri": {
    tr:'parameterized-uri',
    desc: "Enable parameterized URI support. You can specify set of parts: http://{sv1,sv2,sv3}/foo.iso. Also you can specify numeric sequences with step counter: http://host/image[000-100:2].img. A step counter can be omitted. If all URIs do not point to the same file, such as the second example above, -Z option is required. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "proxy-method": {
    tr:'proxy-method',
    desc: "Set the method to use in proxy request. METHOD is either get or tunnel. HTTPS downloads always use tunnel regardless of this option. 默认： get",
    val: 'get',
    options: ["get", "tunnel"]
  },

  "realtime-chunk-checksum": {
    tr:'realtime-chunk-checksum',
    desc: "Validate chunk of data by calculating checksum while downloading a file if chunk checksums are provided. 默认：是",
    val: true,
    options: ["true", "false"],
  },

  "referer": {
    tr:'referer',
    val: '',
    desc: "Set Referer. This affects all URIs."
  },

  "remote-time": {
    tr:'remote-time',
    desc: "Retrieve timestamp of the remote file from the remote HTTP/FTP server and if it is available, apply it to the local file. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "remove-control-file": {
    tr:'remove-control-file',
    desc: "Remove control file before download. Using with --allow-overwrite=true, download always starts from scratch. This will be useful for users behind proxy server which disables resume.",
    val: false,
    options: ["true", "false"],
  },

  "seed-ratio": {
    tr:'seed-ratio',
    val: 0.0,
    desc: "Specify share ratio. Seed completed torrents until share ratio reaches RATIO. You are strongly encouraged to specify equals or more than 1.0 here. Specify 0.0 if you intend to do seeding regardless of share ratio. If --seed-time option is specified along with this option, seeding ends when at least one of the conditions is satisfied. 默认： 1.0"
  },

  "seed-time": {
    tr:'seed-time',
    val: 0,
    desc: "Specify seeding time in minutes. Also see the --seed-ratio option. Note Specifying --seed-time=0 disables seeding after download completed."
  },

  "select-file": {
    tr:'select-file',
    val: '',
    desc: "Set file to download by specifying its index. You can find the file index using the --show-files option. Multiple indexes can be specified by using ,, for example: 3,6. You can also use - to specify a range: 1-5. , and - can be used together: 1-5,8,9. When used with the -M option, index may vary depending on the query ."
  },

  "split": {
    tr:'split',
    val: 5,
    desc: "Download a file using N connections. If more than N URIs are given, first N URIs are used and remaining URIs are used for backup. If less than N URIs are given, those URIs are used more than once so that N connections total are made simultaneously. The number of connections to the same host is restricted by --max-connection-per-server option. See also --min-split-size option. 默认： 5"
  },

  "timeout": {
    tr:'timeout',
    val: 60,
    desc: "Set timeout in seconds. 默认： 60"
  },

  "use-head": {
    tr:'use-head',
    desc: "Use HEAD method for the first request to the HTTP server. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "user-agent": {
    tr:'user-agent',
    val: 'aria2/$VERSION',
    desc: "Set user agent for HTTP(S) downloads. 默认： aria2/$VERSION, $VERSION is replaced by package version."
  },

  "retry-wait": {
    tr:'retry-wait',
    val: 0,
    desc: "Set the seconds to wait between retries. With SEC > 0, aria2 will retry download when the HTTP server returns 503 response. 默认： 0."
  },

  "metalink-base-uri": {
    tr:'metalink-base-uri',
    val: '',
    desc: "Specify base URI to resolve relative URI in metalink:url and metalink:metaurl element in a metalink file stored in local disk. If URI points to a directory, URI must end with /."
  },

  "pause": {
    tr:"pause",
    desc: "Pause download after added. This option is effective only when --enable-rpc=true is given. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "stream-piece-selector": {
    tr:'stream-piece-selector',
    desc: "Specify piece selection algorithm used in HTTP/FTP download. Piece means fixed length segment which is downloaded in parallel in segmented download. If default is given, aria2 selects piece so that it reduces the number of establishing connection. This is reasonable default behaviour because establishing connection is an expensive operation. If inorder is given, aria2 selects piece which has minimum index. Index=0 means first of the file. This will be useful to view movie while downloading it. --enable-http-pipelining option may be useful to reduce reconnection overhead. Please note that aria2 honors --min-split-size option, so it will be necessary to specify a reasonable value to --min-split-size option. If geom is given, at the beginning aria2 selects piece which has minimum index like inorder, but it exponentially increasingly keeps space from previously selected piece. This will reduce the number of establishing connection and at the same time it will download the beginning part of the file first. This will be useful to view movie while downloading it. 默认： default",
    val: 'default',
    options: ["default", "inorder", "geom"]
  },

  "hash-check-only": {
    tr:'hash-check-only',
    desc: "If true is given, after hash check using --check-integrity option, abort download whether or not download is complete. 默认：否",
    val: false,
    options: ["true", "false"],
  },

  "checksum": {
    tr:'checksum',
    val: undefined,
    desc: "Set checksum. TYPE is hash type. The supported hash type is listed in Hash Algorithms in aria2c -v. DIGEST is hex digest. For example, setting sha-1 digest looks like this: sha-1=0192ba11326fe2298c8cb4de616f4d4140213838 This option applies only to HTTP(S)/FTP downloads."
  },

  "piece-length": {
    tr:'piece-length',
    val: '1M',
    desc: "Set a piece length for HTTP/FTP downloads. This is the boundary when aria2 splits a file. All splits occur at multiple of this length. This option will be ignored in BitTorrent downloads. It will be also ignored if Metalink file contains piece hashes. 默认： 1M"
  },

  "uri-selector": {
    tr:'uri-selector',
    desc: "Specify URI selection algorithm. The possible values are inorder, feedback and adaptive. If inorder is given, URI is tried in the order appeared in the URI list. If feedback is given, aria2 uses download speed observed in the previous downloads and choose fastest server in the URI list. This also effectively skips dead mirrors. The observed download speed is a part of performance profile of servers mentioned in --server-stat-of and --server-stat-if options. If adaptive is given, selects one of the best mirrors for the first and reserved connections. For supplementary ones, it returns mirrors which has not been tested yet, and if each of them has already been tested, returns mirrors which has to be tested again. Otherwise, it doesn't select anymore mirrors. Like feedback, it uses a performance profile of servers. 默认： feedback",
    val: 'feedback',
    options: ["inorder", "feedback", "adaptive"]
  }
//}}}
})
.value('$globalSettings', {
  // {{{ settings (global)
  "download-result": {
    tr:'download-result',
    desc: "This option changes the way Download Results is formatted. If OPT is default, print GID, status, average download speed and path/URI. If multiple files are involved, path/URI of first requested file is printed and remaining ones are omitted. If OPT is full, print GID, status, average download speed, percentage of progress and path/URI. The percentage of progress and path/URI are printed for each requested file in each row. 默认： default",
    val: 'default',
    options: ["default", "full"]
  },
  "log": {
    tr:'log',
    val: '',
    desc: 'The file name of the log file. If - is specified, log is written to stdout. If empty string("") is specified, log is not written to file.'
  },
  "log-level": {
    tr:'log-level',
    desc: "Set log level to output. LEVEL is either debug, info, notice, warn or error. 默认： debug.",
    val: 'debug',
    options: ["debug", "info", "notice", "warn", "error"]
  },
  "max-concurrent-downloads": {
    tr:'max-concurrent-downloads',
    val: 5,
    desc: "Set maximum number of parallel downloads for every static (HTTP/FTP) URI, torrent and metalink. See also --split option. 默认： 5"
  },
  "max-download-result": {
    tr:'max-download-result',
    val: 1000,
    desc: "Set maximum number of download result kept in memory. The download results are completed/error/removed downloads. The download results are stored in FIFO queue and it can store at most NUM download results. When queue is full and new download result is created, oldest download result is removed from the front of the queue and new one is pushed to the back. Setting big number in this option may result high memory consumption after thousands of downloads. Specifying 0 means no download result is kept. 默认： 1000"
  },
  "max-overall-download-limit": {
    tr:'max-overall-download-limit',
    val: '0',
    desc: "Set max overall download speed in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the download speed per download, use --max-download-limit option. 默认： 0."
  },
  "max-overall-upload-limit": {
    tr:'max-overall-upload-limit',
    val: '0',
    desc: "Set max overall upload speed in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K). To limit the upload speed per torrent, use --max-upload-limit option. 默认： 0."
  },
  "save-cookies": {
    tr:'save-cookies',
    val: '',
    desc: "Save Cookies to FILE in Mozilla/Firefox(1.x/2.x)/ Netscape format. If FILE already exists, it is overwritten. Session Cookies are also saved and their expiry values are treated as 0. Possible Values: /path/to/file."
  },
  "save-session": {
    tr:'save-session',
    val: '',
    desc: "Save error/unfinished downloads to FILE on exit. You can pass this output file to aria2c with --input-file option on restart."
  },
  "server-stat-of": {
    tr:'server-stat-of',
    val: '',
    desc: "Specify the filename to which performance profile of the servers is saved. You can load saved data using --server-stat-if option. See Server Performance Profile subsection below for file format."
  },
  "conf-path":{
    tr:'配置文件',
    val:'',
    desc:"Aria2配置文件路径。"
  }
  // }}}
})
.value('$globalExclude',  [
	"checksum",
	"index-out",
	"out",
	"pause",
	"select-file"
])
.value('$waitingExclude',  [
	"dry-run",
	"metalink-base-uri",
	"parameterized-uri",
	"pause",
	"piece-length"
])
.value('$activeInclude', [
  "bt-max-peers",
  "bt-request-peer-speed-limit",
  "bt-remove-unselected-file",
  "max-download-limit",
  "max-upload-limit"
]);
