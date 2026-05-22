$ErrorActionPreference = "Stop"

$Root = "C:\Users\timot\Documents\Codex\2026-05-13\files-mentioned-by-the-user-banniere"
$Node = "C:\Users\timot\AppData\Local\OpenAI\Codex\bin\node.exe"
$Port = 8080
$PidFile = Join-Path $Root "server.pid"
$ExpiresFile = Join-Path $Root "server-expires.txt"

Set-Location $Root

$connection = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
if ($connection) {
  $serverPid = $connection.OwningProcess
} else {
  $process = Start-Process -WindowStyle Hidden -FilePath $Node -ArgumentList @("serve-static.mjs") -WorkingDirectory $Root -PassThru
  $serverPid = $process.Id
}

$expires = (Get-Date).AddDays(3)
Set-Content -LiteralPath $PidFile -Value $serverPid
Set-Content -LiteralPath $ExpiresFile -Value $expires.ToString("yyyy-MM-dd HH:mm:ss")

while ((Get-Date) -lt $expires) {
  Start-Sleep -Seconds 60
}

try {
  $running = Get-Process -Id $serverPid -ErrorAction SilentlyContinue
  if ($running) {
    Stop-Process -Id $serverPid -Force
  }
} catch {
  # Server already stopped.
}
