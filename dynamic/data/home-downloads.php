<?php
class Version
{
    public $version;
    public $date;
    public $release_notes_link;
    public $download_win;
    public $download_linux;
    public $download_mac;

    function __construct($version, $date, $release_notes_link, $download_win, $download_linux, $download_mac)
    {
        $this->version = $version;
        $this->date = $date;
        $this->release_notes_link = $release_notes_link;
        $this->download_win = $download_win;
        $this->download_linux = $download_linux;
        $this->download_mac = $download_mac;
    }
}

$releases = array
(
    new Version("0.1", "In Progress","","","","")
)
?>