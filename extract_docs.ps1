$files = Get-ChildItem "Past Q&A\*.docx"
New-Item -ItemType Directory -Force "temp_extracted"
foreach ($file in $files) {
    $name = $file.BaseName
    $destDir = "temp_extracted\$name"
    New-Item -ItemType Directory -Force $destDir
    $zipPath = "$destDir.zip"
    Copy-Item $file.FullName $zipPath
    Expand-Archive $zipPath $destDir -Force
    Write-Host "Extracted $name"
}
