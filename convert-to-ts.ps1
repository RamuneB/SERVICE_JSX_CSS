# Nustatyti skripto vykdymo katalogą kaip darbo katalogą
$DirectoryPath = $PSScriptRoot

# Gaukite visus .js ir .jsx failus iš pasirinkto aplanko ir jo poaplankių
$Files = Get-ChildItem -Path $DirectoryPath -Recurse -Include *.js, *.jsx

foreach ($File in $Files) {
    # Sukurkite naują failo pavadinimą pagal priesagą
    if ($File.Extension -eq ".js") {
        $NewFile = $File.FullName -replace ".js$", ".ts"
    } elseif ($File.Extension -eq ".jsx") {
        $NewFile = $File.FullName -replace ".jsx$", ".tsx"
    }

    # Perkelkite failą su nauju pavadinimu
    Rename-Item -Path $File.FullName -NewName $NewFile
    Write-Host "Pervardintas: $($File.FullName) į $NewFile"
}

Write-Host "Konvertacija baigta."
